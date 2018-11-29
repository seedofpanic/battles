import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {PoisonBiteEffect} from '../../effects/draconite/poisonBiteEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class PoisonBiteAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Poison bite', 1, 2, DamageTypes.CUTTING);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        target.addEffect(this, new PoisonBiteEffect(self));

        super.perform(combat, self, target);
    }
}