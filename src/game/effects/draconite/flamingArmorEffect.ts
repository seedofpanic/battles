import {ResistsModEffect} from '../resistsModEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {calcDamage} from '../../../utils/calcDamage';

export const FLAMING_ARMOR_EFFECT_ID = 'flaming_armor';

export class FlamingArmorEffect extends ResistsModEffect {
    constructor(source: Unit) {
        super(FLAMING_ARMOR_EFFECT_ID, {
            [DamageTypes.FIRE]: 0.8,
            [DamageTypes.HOLY]: 0.8,
        }, 'Flaming armor', 2, source);
    }

    onDamage(damage: number, type: DamageTypes, self: Unit, source: Unit) {
        source.decreaseHp(this, calcDamage(1, 2) * source.getResist(type), type);
    }
}