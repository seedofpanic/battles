import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {calcDamage} from '../../../utils/calcDamage';
import {IUnit} from '../../../models/unit';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export const FLAMING_ARMOR_EFFECT_ID = 'flaming_armor';

export class FlamingArmorEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super(FLAMING_ARMOR_EFFECT_ID, {
            [DamageTypes.FIRE]: 0.8,
            [DamageTypes.HOLY]: 0.8,
        }, 'Flaming armor', 2, actor);
    }

    onDamage(damage: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect) {
        source.actor.decreaseHp(this, calcDamage(1, 2) * source.actor.getResist(type, this), type);
    }
}