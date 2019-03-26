import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class ExecutingSwardAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Executing sward', 4, 8, DamageTypes.CUTTING, 0.15, 1.7);
    }
}