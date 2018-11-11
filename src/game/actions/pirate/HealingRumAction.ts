import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {HealingRumEffect} from '../../effects/pirate/healingRumEffect';

export class HealingRumAction extends BuffAction {
    constructor(source: Unit) {
        super(source, HealingRumEffect, 'Healing rum', 5);
    }
}