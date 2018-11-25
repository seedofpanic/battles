import {Effect} from '../effect';
import {Unit} from '../unit';

const NAME = 'Stun';

export const STUN_EFFECT_ID = 'stun';

export class StunEffect extends Effect {
    constructor(roundsCount: number, actor: Unit) {
        super(STUN_EFFECT_ID, NAME, roundsCount, actor);
    }

    isStunned(value: boolean) {
        return true;
    }
}