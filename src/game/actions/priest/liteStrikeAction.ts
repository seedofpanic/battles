import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class LiteStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Light strike', 3, 5, DamageTypes.HOLY, 0.12, 1.8);
    }
}