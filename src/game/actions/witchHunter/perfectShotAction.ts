import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class PerfectShotAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Perfect shot', 6, 10, DamageTypes.PIERCING, 0.2, 2, 6);
    }
}