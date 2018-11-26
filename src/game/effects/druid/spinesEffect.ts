import {DotEffect} from '../dotEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';

export class SpinesEffect extends DotEffect {
    type = EffectType.POISON;

    constructor(actor: Unit) {
        super('spines', 'Spines', 2, 2, DamageTypes.POISON, 3, actor);
    }
}