import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HellBlastAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Hell blast', 20, 20, DamageTypes.FIRE, 0, 1, 6);
    }
}