import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HeavenStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Heaven strike', 4, 9, DamageTypes.HOLY, 0.15, 1.3);
    }
}