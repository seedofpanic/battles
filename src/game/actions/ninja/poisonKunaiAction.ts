import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {PoisonKunaiEffect} from '../../effects/ninja/poisonKunaiEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class PoisonKunaiAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Poison kunai', 3, 5, DamageTypes.PIERCING);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new PoisonKunaiEffect(this.actor));
    }
}