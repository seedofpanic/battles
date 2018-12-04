import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';

export class StunningSongAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Stunning song', 6);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
       super.perform(combat, self, target);

       target.addEffect(this, new StunEffect(2, this.actor));
    }
}