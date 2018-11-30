import {Action} from '../../action';
import {ICombat} from '../../../models/combat';
import {IUnit} from '../../../models/unit';
import {StunEffect} from '../../effects/stunEffect';

export class UndergroundRoarAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Underground roar', 8);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(2, this.actor));
    }
}