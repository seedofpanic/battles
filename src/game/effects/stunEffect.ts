import {Effect} from '../effect';

const NAME = 'Stun';

export class StunEffect extends Effect {
    id = 'stun';

    constructor(roundsCount: number) {
        super(NAME, roundsCount);
    }

    isStunned(value: boolean) {
        return true;
    }
}