import {DotEffect} from '../dotEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';

export class PoisonKunaiEffect extends DotEffect {
    type = EffectType.POISON;

    constructor(actor: Unit) {
        super('poison_kunai', 'Poison kunai', 2, 3, DamageTypes.POISON, 3, actor);
    }
}