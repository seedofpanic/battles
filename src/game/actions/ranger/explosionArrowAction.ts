import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class ExplosionArrowAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Explosion arrow', 5, 7, DamageTypes.FIRE, 0.1, 1.5, 3);
    }


}