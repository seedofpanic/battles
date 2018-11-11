import {StunEffect} from './stunEffect';
import {Unit} from '../unit';

export class StunningRoarEffect extends StunEffect {
    constructor(source: Unit) {
        super(1, source);
    }
}