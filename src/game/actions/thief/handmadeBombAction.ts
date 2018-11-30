import {IUnit} from '../../../models/unit';
import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';

export class HandmadeBombAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Handmade bomb', 4, 7, DamageTypes.PIERCING, 0.15, 1.5, 4);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);
        target.addEffect(this, new StunEffect(1, this.actor));
    }
}