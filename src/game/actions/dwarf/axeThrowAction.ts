import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class AxeThrowAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Axe throw', 5, 6, DamageTypes.BLUNT, 0.1, 1.5, 2);
    }
}