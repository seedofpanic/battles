import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class BlindingFlashAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Blinding flash', 5, 7, DamageTypes.HOLY, 0.15, 1.14);
    }
}