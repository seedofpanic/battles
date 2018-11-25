import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class InsectsSwarmAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Insects swarm', 3, 6, DamageTypes.HOLY, 0.15, 1.5);
    }
}