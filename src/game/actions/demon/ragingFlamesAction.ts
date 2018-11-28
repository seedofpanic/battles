import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class RagingFlamesAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Raging flames', 4, 7, DamageTypes.FIRE, 0.15, 1.5);
    }
}