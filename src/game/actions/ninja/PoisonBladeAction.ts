import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {PoisonBladeEffect} from '../../effects/ninja/poisonBladeEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class PoisonBladeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Poison blade', 4, 6, DamageTypes.CUTTING, 0.2, 1.3, 6);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new PoisonBladeEffect(this.actor));
    }
}