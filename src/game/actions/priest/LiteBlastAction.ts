import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class LiteBlastAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Lite blast', 20, 20, DamageTypes.HOLY, 0, 1, 5);
    }
}