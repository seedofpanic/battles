import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export const SHIELD_OF_ANGER_EFFECT_ID = 'shield_of_anger';

export class ShieldOfAngerEffect extends Effect {
    constructor(actor: Unit) {
        super(SHIELD_OF_ANGER_EFFECT_ID, 'Shield of anger', 3, actor);
    }

    resistMod(value: number, type: DamageTypes, self: Unit): number {
        return value * 1.2;
    }

    damageMod(value: number, type: DamageTypes, self: Unit, target: Unit): number {
        return value * 1.1;
    }
}