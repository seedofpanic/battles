import {Effect} from '../effect';
import {Unit} from '../unit';

const NAME = 'Stun';

export class StunEffect extends Effect {
    id = 'stun';

    constructor(roundsCount: number) {
        super(NAME, roundsCount);
    }

    postTick(self: Unit) {
        self.isStunned = true;
    }
}