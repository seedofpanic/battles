import {HitAction} from './hitAction';
import {DamageTypes} from '../models/damageTypes';

export class PiercingStrikeAction extends HitAction {
    constructor() {
        super('Piercing strike', 3, 6, DamageTypes.PIERCING, 0.1, 1.3);
    }
}