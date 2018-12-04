import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export class HollyWoundsEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(actor: IUnit) {
        super('holly_wounds', 'Holly wounds', 2, 3, DamageTypes.CUTTING, 3, actor);
    }
}