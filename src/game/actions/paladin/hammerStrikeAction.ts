import {Action} from '../../action';
import {Unit} from '../../unit';
import {Combat} from '../../combat';
import {StunEffect} from '../../effects/stunEffect';

export class HammerStrikeAction extends Action {
    constructor(actor: Unit) {
        super(actor, 'Hammer strike', 4);
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        if (Math.random() < 0.6) {
            target.addEffect(this, new StunEffect(1, this.actor));
        }
    }
}