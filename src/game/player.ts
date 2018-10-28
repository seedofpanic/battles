import {Action} from './action';
import {DamageTypes} from './models/damageTypes';
import {Combat} from './combat';
import {Effect} from './effect';
import {Character} from './character';
import {HitAction} from './actions/hitAction';
import * as WebSocket from 'ws';
import {allowedCharacters} from './game';

export class Player {
    username: string;
    currentCombat: Combat;
    character: Character;
    private ws: WebSocket;

    constructor(public chatId: string) {
    }

    setWS(ws: WebSocket) {
        this.ws = ws;
    }

    setAction(action: string) {
        this.character.action = this.character.actions[action];
    }

    decreaseHp(action: HitAction | Effect, damage: number) {
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
        return this.character.resists[type] || 1;
    }

    addEffect(action: Action | Effect, effect: Effect) {
        this.character.effects.push(effect);
        this.currentCombat.battleLog.push(`${action.name} adds ${effect.name} effect`);
    }

    getName() {
        return this.character.name;
    }

    perform(target: Player) {
        this.character.action.perform(this.currentCombat, this, target);

        Object.keys(this.character.actions).forEach(key => {
            this.character.actions[key].tick();
        });

        this.character.action = undefined;
    }

    tick() {
        this.character.effects.forEach(effect => {
            effect.tick(this);
        });
    }

    setCharacter(characterName: string) {
        if (allowedCharacters[characterName]) {
            this.character = new (allowedCharacters[characterName].create)();
        } else {
            this.send('error', 'Unexpected character name');
        }
    }

    send(type: string, payload: any) {
        if (this.ws.readyState !== this.ws.OPEN) {
            return;
        }

        this.ws.send(JSON.stringify({
            type,
            payload
        }));
    }
}