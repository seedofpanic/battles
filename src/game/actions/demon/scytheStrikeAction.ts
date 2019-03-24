import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class ScytheStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Scythe strike', 5, 8, DamageTypes.CUTTING, 0.1, 1.5);
    }
}