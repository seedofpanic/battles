import {DotEffect} from '../dotEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';

export class BloodyWoundEffect extends DotEffect {
    type = EffectType.BLEED;

    constructor(actor: Unit) {
        super('bloody_wound', 'Bloody wound', 3, 5, DamageTypes.CUTTING, 3, actor);
    }
}