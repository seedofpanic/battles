import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export class PoisonBladeEffect extends DotEffect {
    type = EffectType.POISON;

    constructor(actor: IUnit) {
        super('poison_blade', 'Poison blade', 2, 4, DamageTypes.POISON, 3, actor);
    }
}