import {Action} from '../../action';
import {DeadlyKinshipEffect} from '../../effects/deadlyKinshipEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class DeadlyKinshipAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Deadly kinship', 4);
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        target.addEffect(this, new DeadlyKinshipEffect(self));
    }
}