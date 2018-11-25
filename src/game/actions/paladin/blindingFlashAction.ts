import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class BlindingFlashAction extends HitAction {
    constructor(actor: Unit) {
        super(actor, 'Blinding flash', 5, 7, DamageTypes.HOLY, 0.15, 1.14);
    }
}