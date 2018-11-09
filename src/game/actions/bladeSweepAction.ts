import {HitAction} from './hitAction';
import {DamageTypes} from '../models/damageTypes';

export class BladeSweepAction extends HitAction {
    constructor() {
        super('Blade sweep', 5, 8, DamageTypes.CUTTING, 0.15, 1.4);
    }
}