import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class SuddenStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Sudden strike', 4, 7, DamageTypes.CUTTING, 0.15, 1.5);
    }
}