import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class HeavenStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Heaven strike', 4, 9, DamageTypes.HOLY, 0.15, 1.3);
    }
}