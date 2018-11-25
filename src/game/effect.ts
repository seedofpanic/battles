import {DamageTypes} from './models/damageTypes';
import {Unit} from './unit';
import {Action} from './action';

export abstract class Effect {
    canStack = true;

    constructor(public id: string, public name: string, public roundsCount: number, public actor: Unit) {
    }

    preTick(unit: Unit) {
        this.roundsCount--;
    }

    postTick(unit: Unit) {
    }

    getIsEnded(): boolean {
        return this.roundsCount <= 0;
    }

    damageMod(value: number, type: DamageTypes, self: Unit, target: Unit): number {
        return value;
    }

    resistMod(value: number, type: DamageTypes, self: Unit, source: Action | Effect): number {
        return value;
    }

    effectResistMod(value: number, effectId: string) {
        return value;
    }

    isStunned(value: boolean) {
        return value;
    }

    onDamage(damage: number, type: DamageTypes, self: Unit, source: Action | Effect) {
    }

    critMod(value: number, type: DamageTypes) {
        return value;
    }
}