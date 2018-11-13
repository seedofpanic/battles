import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class BroadswordSlashAction extends HitAction {
    constructor(source: Unit) {
        super(source, 'Broadsword slash', 3, 5, DamageTypes.CUTTING, 0.12, 1.5);
    }
}