import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class PiercingStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Piercing strike', 3, 6, DamageTypes.PIERCING, 0.1, 1.3);
    }
}