import {StunEffect} from './stunEffect';
import {Unit} from '../unit';

export class StunningRoarEffect extends StunEffect {
    type = EffectType.STUN;
    
    constructor(actor: Unit) {
        super(1, actor);
    }
}