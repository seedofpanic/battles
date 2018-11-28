import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class PistolShotAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Pistol shoot', 6, 8, DamageTypes.PIERCING, 0.12, 1.8, 2);
    }
}