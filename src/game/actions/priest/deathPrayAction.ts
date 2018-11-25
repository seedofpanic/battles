import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class DeathPrayAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Death pray', 5, 8, DamageTypes.DEATH, 0.2, 2);
    }
}