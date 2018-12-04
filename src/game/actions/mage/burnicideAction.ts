import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class BurnicideAction extends HitAction {
    constructor(actor: IUnit,) {
        super(actor, 'Burnicide', 15, 15, DamageTypes.FIRE);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        const selfResist = self.getResist(this.damageType, this);

        target.decreaseHp(this, 10 * selfResist, this.damageType);

        super.perform(combat, self, target);
    }
}