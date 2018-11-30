import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class BrassKnockAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Brass knock', 3, 6, DamageTypes.BLUNT, 0.2, 1.2);
    }
}