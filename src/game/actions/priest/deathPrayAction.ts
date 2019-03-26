import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class DeathPrayAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Death pray', 5, 8, DamageTypes.DEATH, 0.2, 2);
    }
}