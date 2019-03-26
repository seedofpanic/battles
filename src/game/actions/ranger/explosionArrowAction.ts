import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class ExplosionArrowAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Explosion arrow', 5, 7, DamageTypes.FIRE, 0.1, 1.5, 3);
    }
}