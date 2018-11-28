import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {StunEffect} from '../../effects/stunEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class StunGrenadeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Stun grenade', 2, 5, DamageTypes.PIERCING, 0.1, 1.2, 4);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(1, this.actor));
    }
}