import {DamageTypes} from './models/damageTypes';
import {Unit} from './unit';

export abstract class Effect {
    canStack = true;
    abstract id: string;

    constructor(public name: string, public roundsCount: number) {
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

    resistMod(value: number, type: DamageTypes): number {
        return value;
    }

    effectResistMod(value: number, effectId: string) {
        return value;
    }
}