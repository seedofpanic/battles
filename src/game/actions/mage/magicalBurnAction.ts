import {StunEffect} from '../../effects/stunEffect';
import {Action} from '../../action';
import {BurningDotEffect} from '../../effects/burningDotEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class MagicalBurnAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Magical burn', 5);
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        if (Math.random() > 0.5) {
            target.addEffect(this, new StunEffect(1, self));
            target.addEffect(this, new BurningDotEffect(5, 5, 2, self));
        }
    }
}