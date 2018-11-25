import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class ChoppingAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Chopping', 6, 9, DamageTypes.CUTTING, 0.1, 1.5, 2);
    }
}