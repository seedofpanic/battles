import {DotEffect} from '../dotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';

export class BladesWhirlwindEffect extends DotEffect {
    type = EffectType.BLEED;

    constructor(actor: IUnit) {
        super('blades_whirlwind', 'Blades whirlwind', 1, 2, DamageTypes.CUTTING, 3, actor);
    }
}