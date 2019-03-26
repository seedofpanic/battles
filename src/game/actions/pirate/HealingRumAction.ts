import {BuffAction} from '../buffAction';
import {HealingRumEffect} from '../../effects/pirate/healingRumEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HealingRumAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, HealingRumEffect, 'Healing rum', 5);
    }
}