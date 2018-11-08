import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export class DeadlyKinshipEffect extends Effect {
    id = 'deadly_kinship';

    constructor() {
        super('Deadly kinship', 1);
    }

    damageMod(value: number, type: DamageTypes, self: Unit, target: Unit): number {
        self.decreaseHp(this, value
            * self.getResist(type));

        return value;
    }
}