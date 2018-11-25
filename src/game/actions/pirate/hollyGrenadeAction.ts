import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {HollyWoundsEffect} from '../../effects/pirate/hollyWoundsEffect';

export class HollyGrenadeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Holly grenade', 3, 6, DamageTypes.PIERCING, 0, 1, 3);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new HollyWoundsEffect(this.actor));
    }
}