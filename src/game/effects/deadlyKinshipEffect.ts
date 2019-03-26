import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const DEADLY_KINSHIP_EFFECT_ID = 'deadly_kinship';

export class DeadlyKinshipEffect extends Effect {
    constructor(actor: ICharacter) {
        super(DEADLY_KINSHIP_EFFECT_ID, 'Deadly kinship', 1, actor);
    }

    damageMod(value: number, type: DamageTypes, self: ICharacter, target: ICharacter): number {
        self.decreaseHp(this, value
            * self.getResist(type, this), type);

        return value;
    }
}