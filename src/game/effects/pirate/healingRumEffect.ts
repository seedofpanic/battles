import {HotEffect} from '../hotEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class HealingRumEffect extends HotEffect {
    constructor(source: Unit) {
        super('healing_rum', 'Healing rum', 5, 5, DamageTypes.POISON, 3, source);
    }
}