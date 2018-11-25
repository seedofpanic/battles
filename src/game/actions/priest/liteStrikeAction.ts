import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class LiteStrikeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Light strike', 3, 5, DamageTypes.HOLY, 0.12, 1.8);
    }
}