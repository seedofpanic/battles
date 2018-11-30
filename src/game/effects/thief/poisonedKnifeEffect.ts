import {DotEffect} from '../dotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class PoisonedKnifeEffect extends DotEffect {
    constructor(actor: IUnit) {
        super('poisoned_knife', 'Poisoned knife', 1, 3, DamageTypes.POISON, 3, actor);
    }
}