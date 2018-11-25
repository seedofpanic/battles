import {ResistsModEffect} from '../resistsModEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {calcDamage} from '../../../utils/calcDamage';
import {Effect} from '../../effect';
import {Action} from '../../action';

export const FLAMING_ARMOR_EFFECT_ID = 'flaming_armor';

export class FlamingArmorEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super(FLAMING_ARMOR_EFFECT_ID, {
            [DamageTypes.FIRE]: 0.8,
            [DamageTypes.HOLY]: 0.8,
        }, 'Flaming armor', 2, actor);
    }

    onDamage(damage: number, type: DamageTypes, self: Unit, source: Action | Effect) {
        source.actor.decreaseHp(this, calcDamage(1, 2) * source.actor.getResist(type, this), type);
    }
}