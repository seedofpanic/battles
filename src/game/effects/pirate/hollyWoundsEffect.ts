import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HollyWoundsEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(actor: ICharacter) {
        super('holly_wounds', 'Holly wounds', 2, 3, DamageTypes.CUTTING, 3, actor);
    }
}