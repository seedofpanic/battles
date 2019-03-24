import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const SHIELD_OF_ANGER_EFFECT_ID = 'shield_of_anger';

export class ShieldOfAngerEffect extends Effect {
    constructor(actor: ICharacter) {
        super(SHIELD_OF_ANGER_EFFECT_ID, 'Shield of anger', 3, actor);
    }

    resistMod(value: number, type: DamageTypes, self: ICharacter): number {
        return value * 1.2;
    }

    damageMod(value: number, type: DamageTypes, self: ICharacter, target: ICharacter): number {
        return value * 1.1;
    }
}