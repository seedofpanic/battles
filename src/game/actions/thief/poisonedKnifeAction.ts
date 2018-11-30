import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {PoisonedKnifeEffect} from '../../effects/thief/poisonedKnifeEffect';

export class PoisonedKnifeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Poisoned knife', 3, 5, DamageTypes.PIERCING, 0.15, 1.2, 6);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);
        target.addEffect(this, new PoisonedKnifeEffect(this.actor));
    }
}