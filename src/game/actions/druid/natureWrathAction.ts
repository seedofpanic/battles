import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class NatureWrathAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Nature wrath', 4, 8, DamageTypes.HOLY, 0.1, 1.3);
    }
}