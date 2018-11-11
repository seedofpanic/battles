import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export class PiercingStrikeAction extends HitAction {
    constructor(source: Unit) {
        super(source, 'Piercing strike', 3, 6, DamageTypes.PIERCING, 0.1, 1.3);
    }
}