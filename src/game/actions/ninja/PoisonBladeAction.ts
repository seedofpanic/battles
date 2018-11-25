import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {PoisonBladeEffect} from '../../effects/ninja/poisonBladeEffect';

export class PoisonBladeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Poison blade', 4, 6, DamageTypes.CUTTING, 0.2, 1.3, 6);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new PoisonBladeEffect(this.actor));
    }
}