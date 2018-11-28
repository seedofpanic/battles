import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class ChoppingAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Chopping', 6, 9, DamageTypes.CUTTING, 0.1, 1.5, 2);
    }
}