import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class HellBlastAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Hell blast', 20, 20, DamageTypes.FIRE, 0, 1, 6);
    }
}