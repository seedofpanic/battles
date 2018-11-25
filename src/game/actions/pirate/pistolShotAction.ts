import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class PistolShotAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Pistol shoot', 6, 8, DamageTypes.PIERCING, 0.12, 1.8, 2);
    }
}