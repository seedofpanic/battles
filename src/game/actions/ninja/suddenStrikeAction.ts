import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class SuddenStrikeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Sudden strike', 4, 7, DamageTypes.CUTTING, 0.15, 1.5);
    }
}