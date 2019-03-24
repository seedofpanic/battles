import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PistolShotAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Pistol shoot', 6, 8, DamageTypes.PIERCING, 0.12, 1.8, 2);
    }
}