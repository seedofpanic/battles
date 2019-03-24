import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class LiteStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Lite strike', 3, 5, DamageTypes.HOLY, 0.12, 1.8);
    }
}