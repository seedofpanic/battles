import {StunEffect} from './stunEffect';
import {Unit} from '../unit';

export class StunningRoarEffect extends StunEffect {
    constructor(actor: Unit) {
        super(1, actor);
    }
}