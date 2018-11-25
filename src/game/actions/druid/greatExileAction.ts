import {Action} from '../../action';
import {Unit} from '../../unit';
import {Combat} from '../../combat';

export class GreatExileAction extends Action {
    constructor(actor: Unit) {
        super(actor, 'Great exile', 5);
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        target.kill();
    }
}