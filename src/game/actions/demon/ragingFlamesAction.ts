import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class RagingFlamesAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Raging flames', 4, 7, DamageTypes.FIRE, 0.15, 1.5);
    }
}