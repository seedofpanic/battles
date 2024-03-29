import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export class DamageModEffect extends Effect {
    canStack = false;

    constructor(id: string, name: string, roundsCount: number,
                private mod: number | {[name: string]: number}, actor: ICharacter) {
        super(id, name, roundsCount, actor);
    }

    damageMod(value: number, type: DamageTypes): number {
        if (typeof this.mod === 'object') {
            return value * (this.mod[type] || 1);
        } else {
            return value * this.mod;
        }
    }
}