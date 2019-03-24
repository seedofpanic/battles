import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class BoneSpikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Bone spike', 3, 5, DamageTypes.PIERCING, 0.15, 1.5);
    }
}