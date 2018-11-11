import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';
import {ClawStrikeEffect} from '../../effects/draconite/clawStrikeEffect';

export class ClawStrikeAction extends HitAction {
    constructor(source: Unit,) {
        super(source, 'Claw strike', 4, 7, DamageTypes.CUTTING, 0.15, 1.4, 4);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        target.addEffect(this, new ClawStrikeEffect(self));
    }
}