import {DotEffect} from '../dotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

export class BladesWhirlwindEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(actor: ICharacter) {
        super('blades_whirlwind', 'Blades whirlwind', 1, 2, DamageTypes.CUTTING, 3, actor);
    }
}