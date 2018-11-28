import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export class SpinesEffect extends DotEffect {
    type = EffectType.POISON;

    constructor(actor: IUnit) {
        super('spines', 'Spines', 2, 2, DamageTypes.POISON, 3, actor);
    }
}