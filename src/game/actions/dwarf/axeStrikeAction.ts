import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class AxeStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Axe strike', 4, 6, DamageTypes.CUTTING, 0.12, 1.5);
    }
}