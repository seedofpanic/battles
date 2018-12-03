import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';

export class SuppressShoutAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Suppress shout', 1, 2, DamageTypes.SHADOW, 0, 1, 8);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(2, this.actor));
    }
}