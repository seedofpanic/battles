import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class DeathTouchAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Death touch', 6, 9, DamageTypes.DEATH, 0.15, 1.9, 2);
    }
}