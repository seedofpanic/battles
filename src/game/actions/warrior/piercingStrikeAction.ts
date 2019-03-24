import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PiercingStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Piercing strike', 3, 6, DamageTypes.PIERCING, 0.1, 1.3);
    }
}