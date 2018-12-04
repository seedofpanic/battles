import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class KnifeThrowAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Knife throw', 3, 5, DamageTypes.PIERCING, 0.15, 1.5);
    }
}