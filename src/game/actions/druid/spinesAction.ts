import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {SpinesEffect} from '../../effects/druid/spinesEffect';

export class SpinesAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Spines', 3, 6, DamageTypes.CUTTING, 0, 1, 5);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new SpinesEffect(this.actor));
    }
}