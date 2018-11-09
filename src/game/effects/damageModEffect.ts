import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';

export class DamageModEffect extends Effect {
    canStack = false;
    id = 'damage_mod';

    constructor(name: string, roundsCount: number, private mod: number | {[name: string]: number}) {
        super(name, roundsCount);
    }

    damageMod(value: number, type: DamageTypes): number {
        if (typeof this.mod === 'object') {
            return value * this.mod[type];
        } else {
            return value * this.mod;
        }
    }
}