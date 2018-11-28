import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class SuddenStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Sudden strike', 4, 7, DamageTypes.CUTTING, 0.15, 1.5);
    }
}