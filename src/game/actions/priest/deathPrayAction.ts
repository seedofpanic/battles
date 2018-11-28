import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class DeathPrayAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Death pray', 5, 8, DamageTypes.DEATH, 0.2, 2);
    }
}