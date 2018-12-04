import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class ExecutingSwardAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Executing sward', 4, 8, DamageTypes.CUTTING, 0.15, 1.7);
    }
}