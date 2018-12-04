import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class RapierAttackAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Rapier attack', 5, 6, DamageTypes.PIERCING, 0.15, 1.5);
    }
}