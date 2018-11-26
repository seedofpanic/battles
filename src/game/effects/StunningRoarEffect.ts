import {StunEffect} from './stunEffect';
import {Unit} from '../unit';
import {EffectType} from '../models/effectType';

export class StunningRoarEffect extends StunEffect {
    type = EffectType.STUN;

    constructor(actor: Unit) {
        super(1, actor);
    }
}