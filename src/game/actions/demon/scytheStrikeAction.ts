import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class ScytheStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Scythe strike', 5, 8, DamageTypes.CUTTING, 0.1, 1.5);
    }
}