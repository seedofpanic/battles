import {DotEffect} from '../dotEffect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class ThrowingKnivesEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(actor: ICharacter) {
        super('throwing_knives', 'Throwing knives', 3, 5, DamageTypes.CUTTING, 3, actor);
    }
}