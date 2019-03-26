import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class RagingFlamesAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Raging flames', 4, 7, DamageTypes.FIRE, 0.15, 1.5);
    }
}