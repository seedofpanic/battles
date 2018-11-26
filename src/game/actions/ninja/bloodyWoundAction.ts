import {Unit} from '../../unit';
import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {BloodyWoundEffect} from '../../effects/ninja/bloodyWoundEffect';

export class BloodyWoundAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Bloody wound', 3, 5, DamageTypes.PIERCING, 0.15, 1.2);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new BloodyWoundEffect(this.actor));
    }
}