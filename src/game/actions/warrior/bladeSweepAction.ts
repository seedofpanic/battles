import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export class BladeSweepAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Blade sweep', 5, 8, DamageTypes.CUTTING, 0.15, 1.4);
    }
}