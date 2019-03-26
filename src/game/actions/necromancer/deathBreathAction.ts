import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class DeathBreathAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Death breath', 10, 15, 0.2, 2, DamageTypes.DEATH, 5);
    }
}