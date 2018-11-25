import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class LiteBlastAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Lite blast', 20, 20, DamageTypes.HOLY, 0, 1, 5);
    }
}