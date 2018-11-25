import {Action} from '../action';
import {Combat} from '../combat';
import {Unit} from '../unit';

const NAME = 'Stun';

export class StunAction extends Action {
    type = EffectType.STUN;

    constructor(actor: Unit) {
        super(actor, NAME);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
    }
}