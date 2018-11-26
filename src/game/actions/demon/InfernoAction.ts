import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';

export class InfernoAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Inferno', 20, 20, DamageTypes.FIRE);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        const resist = self.getResist(DamageTypes.FIRE, this);

        self.decreaseHp(this, 10 * resist, DamageTypes.FIRE);

        super.perform(combat, self, target);
    }
}