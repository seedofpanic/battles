import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class BroadswordSlashAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Broadsword slash', 3, 5, DamageTypes.CUTTING, 0.12, 1.5);
    }
}