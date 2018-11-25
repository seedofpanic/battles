import {Unit} from '../../unit';
import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';

export class ShurikenHurlAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Shuriken hurl', 3, 5, DamageTypes.PIERCING, 0.12, 1.3);
    }
}