import {Unit} from '../../unit';
import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';

export class HeavenStrikeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Heaven strike', 4, 9, DamageTypes.HOLY, 0.15, 1.3);
    }
}