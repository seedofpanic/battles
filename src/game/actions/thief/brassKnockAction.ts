import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class BrassKnockAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Brass knock', 3, 6, DamageTypes.BLUNT, 0.2, 1.2);
    }
}