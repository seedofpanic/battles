import {ICharacter} from '../models/character';
import {IAction} from '../models/action';
import {IEffect} from '../models/effect';
import {ICombat} from '../models/combat';
import {IUnit} from '../models/unit';
import {StunAction} from './actions/stunAction';
import {DamageTypes} from './models/damageTypes';
import {Game} from './game';

let nextId = 1;

export abstract class Character implements ICharacter {
    id: string;
    abstract name: string;
    abstract healthMax: number;
    abstract health: number;
    action: IAction;
    isDead: boolean;
    targetId: string;
    abstract actions: {[name: string]: IAction};
    abstract resists: {[name: string]: number};
    effects: IEffect[] = [];
    combat: ICombat;
    team: string;
    timer: number;
    private unit: IUnit;

    constructor(public type: string) {
        this.id = (nextId++).toString();
    }

    get isStunned() {
        return this.effects.reduce((result, effect) => effect.isStunned(result), false);
    }

    get isValuable(): boolean {
        return this.unit.isValuable;
    }

    setUnit(unit: IUnit) {
        this.unit = unit;
    }

    isReady(): boolean {
        return !!this.action;
    }

    beforeResolve(target: ICharacter) {
        this.updateTarget();
        this.action.beforeResolve(this.combat, this, target || this.getDefaultTarget());
    }

    perform(target: ICharacter) {
        this.action.perform(this.combat, this, target || this.getDefaultTarget());

        Object.keys(this.actions).forEach(key => {
            this.actions[key].tick();
        });

        this.action = undefined;
    }

    getDefaultTarget(): ICharacter {
        return this.combat.charactersArr.filter(unit => unit.id !== this.id)[0];
    }

    preTick() {
        this.effects.forEach(effect => {
            effect.preTick(this);
        });
    }

    postTick() {
        this.effects.forEach(effect => {
            effect.postTick(this);
        });
    }

    send(note: string, message: any) {
        this.unit.send(note, message);
    }

    private updateTarget() {
        if (!this.targetId || !this.combat.characters[this.targetId]) {
            const target = this.combat.charactersArr.filter(character => character.team !== this.team)[0];

            if (target) {
                this.targetId = target.id;
            }
        }
    }

    sendSkills(): void {
        if (this.isStunned) {
            this.setAction(new StunAction(this));
            return;
        }

        this.send('select_skill', this.getActions());
    }

    getActions(): {id: string, name: string}[] {
        const actions = Object.keys(this.actions)
            .filter(action => this.isActionAvailable(action))
            .map(action => ({id: action, name: this.actions[action].name}));

        if (actions.length === 0) {
            this.action = new StunAction(this);
        }

        return actions;
    }

    isActionAvailable(action: string) {
        return this.actions[action].isAvailable() && !this.isStunned;
    }

    removeCharacter() {
        this.combat.removeCharacter(this);
        this.send('set_in_battle', false);
        this.unit.character = null;
    }

    consumeUpdate() {
        Object.keys(this.combat.characters).forEach(id => {
            this.combat.characters[id].sendUpdateToCharacter(this);
        });
    }

    broadcastUpdate(): void {
        Object.keys(this.combat.characters).forEach(id => {
            this.sendUpdateToCharacter(this.combat.characters[id]);
        });
    }

    sendUpdateToCharacter(character: ICharacter) {
        character.send('character_update', this.getInfoData());
    }

    getInfoData() {
        return {
            id: this.id,
            team: this.team,
            data: {
                id: this.type,
                name: this.name,
                healthMax: this.healthMax,
                health: this.health,
                effects: this.effects.map(effect => ({
                    id: effect.id,
                    name: effect.name,
                    ticks: effect.roundsCount
                }))
            }
        };
    }

    setAction(action: IAction) {
        this.action = action;
    }

    decreaseHp(action: IAction | IEffect, damage: number, type: DamageTypes) {
        this.effects.forEach(effect => effect.onDamage(damage, type, this, action));

        if (this.health > damage) {
            this.health -= damage;
        } else {
            this.isDead = true;
            this.health = this.effects
                .reduce((result, effect) => effect.onDeath(result, this.health, damage, type, this, action),
                    0);

            if (this.isValuable) {
                const characters = this.combat.charactersArr;

                if (characters[0].isDead !== characters[1].isDead) {
                    if (characters[0].isDead) {
                        Game.updateWinRate(characters[1], characters[0]);
                    } else {
                        Game.updateWinRate(characters[0], characters[1]);
                    }
                }
            }
        }

        this.combat.battleLog.push(`${action.name} do ${Math.ceil(damage)} damage`);

        if (!this.isValuable && this.isDead) {
            this.combat.removeCharacter(this);
        }
    }

    increaseHp(action: IAction | IEffect, heal: number) {
        if (this.isDead) {
            return;
        }

        if (this.health + heal > this.healthMax) {
            this.health = this.healthMax;
        } else {
            this.health += heal;
        }

        this.combat.battleLog.push(`${action.name} heals ${Math.ceil(heal)} hp`);
    }

    getResist(type: DamageTypes, source: IAction | IEffect): number {
        const baseResist = this.resists[type] || 1;

        return this.effects
            .reduce((result, effect) => effect.resistMod(result, type, this, source), baseResist);
    }

    addEffect(action: IAction | IEffect, effect: IEffect) {
        effect.onAdd(this);
        effect.roundsCount = this.effects
            .reduce((result, effect) => effect.effectResistMod(result, effect), effect.roundsCount);

        if (effect.roundsCount === 0) {
            return;
        }

        if (!effect.canStack) {
            this.effects = this.effects.filter(eff => eff.id !== effect.id);
        }

        this.effects.push(effect);
        this.combat.battleLog.push(`${action.name} adds ${effect.name} effect`);
    }

    suicide(): void {
        this.health = 0;
        this.isDead = true;
        Game.update(this.combat);
    }
}