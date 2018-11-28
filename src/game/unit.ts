import {DamageTypes} from './models/damageTypes';
import {allowedCharacters} from './allowedCharacters';
import {StunAction} from './actions/stunAction';
import {getRandomSkill} from '../utils/getRandomSkill';
import {Game} from './game';
import {IUnit} from '../models/unit';
import {ICombat} from '../models/combat';
import {ICharacter} from '../models/character';
import {IEffect} from '../models/effect';
import {IAction} from '../models/action';

export class Unit implements IUnit {
    isPlayer = false;
    username: string;
    currentCombat: ICombat;
    character: ICharacter;
    targetId: string;
    team: string;
    isValuable = false;
    timer: NodeJS.Timer;

    get isStunned() {
        return this.character.effects.reduce((result, effect) => effect.isStunned(result), false);
    }

    constructor(public id: string) {
    }

    setAction(action: string) {
        this.clearTimer();
        this.character.action = this.character.actions[action];
    }

    kill() {
        this.character.health = 0;
        this.character.isDead = true;
    }

    decreaseHp(action: IAction | IEffect, damage: number, type: DamageTypes) {
        this.character.effects.forEach(effect => effect.onDamage(damage, type, this, action));

        if (this.character.health > damage) {
            this.character.health -= damage;
        } else {
            this.character.health = 0;
            this.character.isDead = true;
        }

        this.currentCombat.battleLog.push(`${action.name} do ${Math.ceil(damage)} damage`);
    }

    increaseHp(action: IAction | IEffect, heal: number) {
        if (this.character.health + heal > this.character.healthMax) {
            this.character.health = this.character.healthMax;
        } else {
            this.character.health += heal;
        }

        this.currentCombat.battleLog.push(`${action.name} heals ${Math.ceil(heal)} hp`);
    }

    getResist(type: DamageTypes, source: IAction | IEffect): number {
        const baseResist = this.character.resists[type] || 1;

        return this.character.effects
            .reduce((result, effect) => effect.resistMod(result, type, this, source), baseResist);
    }

    addEffect(action: IAction | IEffect, effect: IEffect) {
        effect.roundsCount = this.character.effects
            .reduce((result, effect) => effect.effectResistMod(result, effect.type), effect.roundsCount);

        if (effect.roundsCount === 0) {
            return;
        }

        if (!effect.canStack) {
            this.character.effects = this.character.effects.filter(eff => eff.id !== effect.id);
        }

        this.character.effects.push(effect);
        this.currentCombat.battleLog.push(`${action.name} adds ${effect.name} effect`);
    }

    getName() {
        return this.character.name;
    }

    beforeResolve(target: Unit) {
        this.updateTarget();
        this.character.action.beforeResolve(this.currentCombat, this, target || this.getDefaultTarget());
    }

    perform(target: Unit) {
        this.character.action.perform(this.currentCombat, this, target || this.getDefaultTarget());

        Object.keys(this.character.actions).forEach(key => {
            this.character.actions[key].tick();
        });

        this.character.action = undefined;
    }

    getDefaultTarget(): IUnit {
        return this.currentCombat.unitsArr.filter(unit => unit.id !== this.id)[0];
    }

    preTick() {
        this.character.effects.forEach(effect => {
            effect.preTick(this);
        });
    }

    postTick() {
        this.character.effects.forEach(effect => {
            effect.postTick(this);
        });
    }

    setCharacter(characterId: string) {
        if (allowedCharacters[characterId]) {
            this.character = new (allowedCharacters[characterId].create)(this, characterId);
        } else {
            this.send('error', 'Unexpected character name');
        }
    }

    send(type: string, payload: any) {
    }

    isActionAvailable(action: string) {
        return this.character.actions[action].isAvailable() && !this.isStunned;
    }

    sendSkills() {
        this.send('select_skill', this.getActions());

        if (this.isPlayer) {
            const skillSelectTimer = 20;
            this.send('show_timer', skillSelectTimer);
            this.timer = setTimeout(() => {
                if (this.currentCombat) {
                    Game.setAction(this as any, getRandomSkill(this));
                }
            }, skillSelectTimer * 1000);
        }
    }

    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    getActions() {
        const actions = Object.keys(this.character.actions)
            .filter(action => this.isActionAvailable(action))
            .map(action => ({id: action, name: this.character.actions[action].name}));

        if (actions.length === 0) {
            this.character.action = new StunAction(this);
        }

        return actions;
    }

    broadcastUpdate() {
        Object.keys(this.currentCombat.units).forEach(id => {
            this.sendUpdateToPlayer(this.currentCombat.units[id]);
        });
    }

    consumeUpdate() {
        Object.keys(this.currentCombat.units).forEach(id => {
            if (this.currentCombat.units[id].character) {
                this.currentCombat.units[id].sendUpdateToPlayer(this);
            }
        });
    }

    sendUpdateToPlayer(target: IUnit) {
        target.send('character_update', {
            id: this.id,
            team: this.team,
            data: {
                id: this.character.id,
                name: this.getName(),
                healthMax: this.character.healthMax,
                health: this.character.health,
                effects: this.character.effects.map(effect => ({
                    id: effect.id,
                    name: effect.name,
                    ticks: effect.roundsCount
                }))
            }
        });
    }

    isReady(): boolean {
        return !!this.character.action;
    }

    clearCombat() {
        if (this.currentCombat) {
            this.kill();

            return;
        }

        this.team = '';
    }

    private updateTarget() {
        if (!this.targetId || !this.currentCombat.units[this.targetId]) {
            this.targetId = this.currentCombat.unitsArr.filter(unit => unit.team !== this.team)[0].id;
        }
    }
}