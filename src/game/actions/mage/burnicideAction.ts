import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

export class BurnicideAction extends HitAction {
    constructor(source: Unit,) {
        super(source, 'Burnicide', 15, 15, DamageTypes.FIRE);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        const selfResist = self.getResist(this.type);

        target.decreaseHp(this, 10 * selfResist, this.type);
    }
}