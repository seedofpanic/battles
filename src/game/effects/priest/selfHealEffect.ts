import {HotEffect} from '../hotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export class SelfHealEffect extends HotEffect {
    constructor(actor: Unit) {
        super('self_heal', 'Self heal', 8, 8, DamageTypes.HOLY, 3, actor);
    }
}