import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export class ResistsModEffect extends Effect {
    canStack = false;

    constructor(id: string, private mod: number | {[name: string]: number},
                name: string, roundsCount: number, source: Unit) {
        super(id, name, roundsCount, source);
    }

    resistMod(value: number, type: DamageTypes, self: Unit): number {
        if (typeof this.mod === 'object') {
            return value * this.mod[type];
        } else {
            return value * this.mod;
        }
    }
}