import {DotEffect} from '../dotEffect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class ThrowingKnivesEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(actor: IUnit) {
        super('throwing_knives', 'Throwing knives', 3, 5, DamageTypes.CUTTING, 3, actor);
    }
}