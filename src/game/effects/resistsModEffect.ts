import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';

export class ResistsModEffect extends Effect {
    canStack = false;
    id = 'resists_mod';

    constructor(private mod: number | {[name: string]: number}, name: string, roundsCount: number) {
        super(name, roundsCount);
    }

    resistMod(value: number, type: DamageTypes): number {
        if (typeof this.mod === 'object') {
            return value * this.mod[type];
        } else {
            return value * this.mod;
        }
    }
}