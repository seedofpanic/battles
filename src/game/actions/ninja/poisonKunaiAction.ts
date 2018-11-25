import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {PoisonKunaiEffect} from '../../effects/ninja/poisonKunaiEffect';

export class PoisonKunaiAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Poison kunai', 3, 5, DamageTypes.PIERCING);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new PoisonKunaiEffect(this.actor))
    }
}