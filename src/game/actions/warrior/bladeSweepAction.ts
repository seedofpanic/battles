import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class BladeSweepAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Blade sweep', 5, 8, DamageTypes.CUTTING, 0.15, 1.4);
    }
}