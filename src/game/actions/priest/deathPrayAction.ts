import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class DeathPrayAction extends HitAction {
    constructor(source: Unit) {
        super(source, 'Death pray', 5, 8, DamageTypes.DEATH, 0.2, 2);
    }
}