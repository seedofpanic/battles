import {Action} from '../action';
import {Combat} from '../combat';
import {Unit} from '../unit';

const NAME = 'Stun';

export class StunAction extends Action {
    constructor(source: Unit) {
        super(source, NAME);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
    }
}