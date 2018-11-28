import {StunEffect} from './stunEffect';
import {EffectType} from '../models/effectType';
import {IUnit} from '../../models/unit';

export class StunningRoarEffect extends StunEffect {
    type = EffectType.STUN;

    constructor(actor: IUnit) {
        super(1, actor);
    }
}