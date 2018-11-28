import {Action} from '../../action';
import {StunEffect} from '../../effects/stunEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class HammerStrikeAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Hammer strike', 4);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        if (Math.random() < 0.6) {
            target.addEffect(this, new StunEffect(1, this.actor));
        }
    }
}