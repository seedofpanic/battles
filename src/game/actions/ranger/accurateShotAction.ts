import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class AccurateShotAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Accurate shot', 4, 7, DamageTypes.PIERCING, 0.25, 1.3);
    }
}