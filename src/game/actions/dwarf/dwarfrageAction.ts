import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class DwarfrageAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Dwarfrage', 6, 10, DamageTypes.CUTTING, 0.1, 1.5, 3);
    }
}