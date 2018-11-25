import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export const DEADLY_KINSHIP_EFFECT_ID = 'deadly_kinship';

export class DeadlyKinshipEffect extends Effect {
    constructor(actor: Unit) {
        super(DEADLY_KINSHIP_EFFECT_ID, 'Deadly kinship', 1, actor);
    }

    damageMod(value: number, type: DamageTypes, self: Unit, target: Unit): number {
        self.decreaseHp(this, value
            * self.getResist(type, this), type);

        return value;
    }
}