import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class AxeStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Axe strike', 4, 6, DamageTypes.CUTTING, 0.12, 1.5);
    }
}