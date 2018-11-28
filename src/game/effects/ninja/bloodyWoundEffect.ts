import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export class BloodyWoundEffect extends DotEffect {
    type = EffectType.BLEED;

    constructor(actor: IUnit) {
        super('bloody_wound', 'Bloody wound', 3, 5, DamageTypes.CUTTING, 3, actor);
    }
}