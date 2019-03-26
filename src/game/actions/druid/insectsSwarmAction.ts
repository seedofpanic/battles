import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class InsectsSwarmAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Insects swarm', 3, 6, DamageTypes.HOLY, 0.15, 1.5);
    }
}