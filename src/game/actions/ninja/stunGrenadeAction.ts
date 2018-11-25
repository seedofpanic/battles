import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {StunEffect} from '../../effects/stunEffect';

export class StunGrenadeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Stun grenade', 2, 5, DamageTypes.PIERCING, 0.1, 1.2, 4);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(1, this.actor));
    }
}