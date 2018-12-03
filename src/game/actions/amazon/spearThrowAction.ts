import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class SpearThrowAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Spear throw', 5, 7, DamageTypes.PIERCING, 0.2, 1.5, 3);
    }
}