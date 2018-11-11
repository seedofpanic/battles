import {Effect} from '../effect';
import {Unit} from '../unit';

const NAME = 'Stun';

export const STUN_EFFECT_ID = 'stun';

export class StunEffect extends Effect {
    constructor(roundsCount: number, source: Unit) {
        super(STUN_EFFECT_ID, NAME, roundsCount, source);
    }

    isStunned(value: boolean) {
        return true;
    }
}