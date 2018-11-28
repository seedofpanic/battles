import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class InsectsSwarmAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Insects swarm', 3, 6, DamageTypes.HOLY, 0.15, 1.5);
    }
}