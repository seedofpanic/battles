import {Combat} from './combat';
import {Character} from './character';
import {Effect} from './effect';
import {Action} from './action';
import {DamageTypes} from './models/damageTypes';
import {allowedCharacters} from './allowedCharacters';
import {StunAction} from './actions/stunAction';

export class Unit {
    username: string;
    currentCombat: Combat;
    character: Character;
    isStunned: boolean;
    targetId: string;

    constructor(public id: string) {
    }

    setAction(action: string) {
        this.character.action = this.character.actions[action];
    }

    kill() {
        this.character.health = 0;
        this.character.isDead = true;
    }

    decreaseHp(action: Action | Effect, damage: number) {
        if (this.character.health > damage) {
            this.character.health -= damage;
        } else {
            this.character.health = 0;
            this.character.isDead = true;
        }

        this.currentCombat.battleLog.push(`${action.name} do ${Math.ceil(damage)} damage`);
    }

    increaseHp(action: Action | Effect, heal: number) {
        if (this.character.health + heal > this.character.healthMax) {
            this.character.health = this.character.healthMax;
        } else {
            this.character.health += heal;
        }

        this.currentCombat.battleLog.push(`${action.name} heals ${Math.ceil(heal)} hp`);
    }

    getResist(type: DamageTypes): number {
        const baseResist = this.character.resists[type] || 1;

        return this.character.effects.reduce((result, effect) => effect.resistMod(result), baseResist);
    }

    addEffect(action: Action | Effect, effect: Effect) {
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
        this.character.action.beforeResolve(this.currentCombat, this, target || this.getDefaultTarget());
    }

    perform(target: Unit) {
        this.character.action.perform(this.currentCombat, this, target || this.getDefaultTarget());

        Object.keys(this.character.actions).forEach(key => {
            this.character.actions[key].tick();
        });

        this.character.action = undefined;
    }

    getDefaultTarget(): Unit {
        return this.currentCombat.unitsArr.filter(unit => unit.id !== this.id)[0];
    }

    resetStats() {
        this.isStunned = false;
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

    setCharacter(characterName: string) {
        if (allowedCharacters[characterName]) {
            this.character = new (allowedCharacters[characterName].create)(characterName);
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
    }

    getActions() {
        const actions = Object.keys(this.character.actions)
            .filter(action => this.isActionAvailable(action))
            .map(action => ({id: action, name: this.character.actions[action].name}));

        if (actions.length === 0) {
            this.character.action = new StunAction();
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

    sendUpdateToPlayer(target: Unit) {
        target.send('character_update', {
            id: this.id,
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
}