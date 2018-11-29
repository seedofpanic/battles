import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {HideEffect} from '../../effects/ranger/hideEffect';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';

export class HideAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, HideEffect, 'Hide', 6);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        target.addEffect(this, new StunEffect(1, this.actor));

        super.perform(combat, self, target);
    }
}