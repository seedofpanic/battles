import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class FarLungeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Far lunge', 4, 7, DamageTypes.PIERCING, 0.14, 1.5);
    }
}