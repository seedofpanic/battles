import {Action} from '../action';
import {Player} from '../player';
import {Combat} from '../combat';

const NAME = 'Stun';

export class StunAction extends Action {
    constructor() {
        super(NAME);
    }

    perform(combat: Combat, player?: Player, target?: Player) {
    }
}