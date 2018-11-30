import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class DwarfrageAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Dwarfrage', 6, 10, DamageTypes.CUTTING, 0.1, 1.5, 3);
    }
}