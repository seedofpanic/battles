import {StunEffect} from './stunEffect';
import {EffectType} from '../models/effectType';
import {IUnit} from '../../models/unit';

export class StunningRoarEffect extends StunEffect {
    type = {
        ...super.type,
        [EffectType.STUN]: true,
    };

    constructor(actor: IUnit) {
        super(1, actor);
    }
}