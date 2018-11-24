import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {StunEffect} from '../../effects/stunEffect';

export class FlashOfLiteAction extends HitAction {
    constructor(source: Unit) {
        super(source, 'Flash of lite', 3, 3, DamageTypes.HOLY, 0, 1, 3);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(1, target));
    }
}