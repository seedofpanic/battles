import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {ClawStrikeEffect} from '../../effects/draconite/clawStrikeEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class ClawStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Claw strike', 4, 7, DamageTypes.CUTTING, 0.15, 1.4, 4);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        target.addEffect(this, new ClawStrikeEffect(self));

        super.perform(combat, self, target);
    }
}