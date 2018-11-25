import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

export class BurnicideAction extends HitAction {
    constructor(actor: Unit,) {
        super(actor, 'Burnicide', 15, 15, DamageTypes.FIRE);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        const selfResist = self.getResist(this.type, this);

        target.decreaseHp(this, 10 * selfResist, this.type);
    }
}