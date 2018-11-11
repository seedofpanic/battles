import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export class DamageModEffect extends Effect {
    canStack = false;

    constructor(id: string, name: string, roundsCount: number,
                private mod: number | {[name: string]: number}, source: Unit) {
        super(id, name, roundsCount, source);
    }

    damageMod(value: number, type: DamageTypes): number {
        if (typeof this.mod === 'object') {
            return value * this.mod[type];
        } else {
            return value * this.mod;
        }
    }
}