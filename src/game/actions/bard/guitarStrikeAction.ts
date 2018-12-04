import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class GuitarStrikeAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Guitar strike', 2, 4, DamageTypes.BLUNT, 0.15, 1.5);
    }
}