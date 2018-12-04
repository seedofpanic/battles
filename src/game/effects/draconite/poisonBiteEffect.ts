import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export const POISON_BITE_EFFECT = 'poison_bite';

export class PoisonBiteEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.POISON]: true
    };

    constructor(actor: IUnit) {
        super(POISON_BITE_EFFECT, 'Poison bite', 2, 4, DamageTypes.POISON, 3, actor);
    }
}