import {HotEffect} from '../hotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export class SelfHealEffect extends HotEffect {
    constructor(source: Unit) {
        super('self_heal', 'Self heal', 8, 8, DamageTypes.HOLY, 3, source);
    }
}