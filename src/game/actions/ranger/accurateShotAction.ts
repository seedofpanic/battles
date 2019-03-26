import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class AccurateShotAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Accurate shot', 4, 7, DamageTypes.PIERCING, 0.25, 1.3);
    }
}