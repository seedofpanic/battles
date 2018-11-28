import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {StunEffect} from '../../effects/stunEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class FlashOfLiteAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Flash of lite', 3, 3, DamageTypes.HOLY, 0, 1, 3);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(1, self));
    }
}