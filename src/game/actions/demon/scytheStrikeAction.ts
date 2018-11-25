import {Unit} from '../../unit';
import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';

export class ScytheStrikeAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Scythe strike', 5, 8, DamageTypes.CUTTING, 0.1, 1.5);
    }
}