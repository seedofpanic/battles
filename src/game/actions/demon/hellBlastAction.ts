import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class HellBlastAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Hell blast', 20, 20, DamageTypes.FIRE, 0, 1, 6);
    }
}