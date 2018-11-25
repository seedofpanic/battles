import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {HealingRumEffect} from '../../effects/pirate/healingRumEffect';

export class HealingRumAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, HealingRumEffect, 'Healing rum', 5);
    }
}