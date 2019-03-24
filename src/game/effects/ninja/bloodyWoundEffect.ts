import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class BloodyWoundEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(actor: ICharacter) {
        super('bloody_wound', 'Bloody wound', 3, 5, DamageTypes.CUTTING, 3, actor);
    }
}