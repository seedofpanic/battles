import {Action} from '../../action';
import {VanishEffect} from '../../effects/ninja/VanishEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class VanishAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Vanish', 6);
    }

    beforeResolve(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.beforeResolve(combat, self, target);

        self.addEffect(this, new VanishEffect(this.actor));
    }
}