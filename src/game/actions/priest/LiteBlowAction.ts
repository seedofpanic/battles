import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class LiteBlowAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Lite blow', 20, 20, DamageTypes.HOLY, 0, 1, 5);
    }
}