import {BuffAction} from '../buffAction';
import {HealingRumEffect} from '../../effects/pirate/healingRumEffect';
import {IUnit} from '../../../models/unit';

export class HealingRumAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, HealingRumEffect, 'Healing rum', 5);
    }
}