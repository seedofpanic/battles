import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class NatureWrathAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Nature wrath', 4, 8, DamageTypes.HOLY, 0.1, 1.3);
    }
}