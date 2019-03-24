import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class DeathTouchAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Death touch', 6, 9, DamageTypes.DEATH, 0.15, 1.9, 2);
    }
}