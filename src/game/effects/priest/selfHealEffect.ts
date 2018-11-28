import {HotEffect} from '../hotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class SelfHealEffect extends HotEffect {
    constructor(actor: IUnit) {
        super('self_heal', 'Self heal', 8, 8, DamageTypes.HOLY, 3, actor);
    }
}