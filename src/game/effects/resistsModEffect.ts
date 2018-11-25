import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {Action} from '../action';

export class ResistsModEffect extends Effect {
    canStack = false;

    constructor(id: string, private mod: number | {[name: string]: number},
                name: string, roundsCount: number, actor: Unit) {
        super(id, name, roundsCount, actor);
    }

    resistMod(value: number, type: DamageTypes, self: Unit, source: Action | Effect): number {
        if (typeof this.mod === 'object') {
            return value * (this.mod[type] || 1);
        } else {
            return value * this.mod;
        }
    }
}