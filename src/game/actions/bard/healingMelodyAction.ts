import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {HealingMelodyEffect} from '../../effects/bard/healingMelodyEffect';

export class HealingMelodyAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, HealingMelodyEffect, 'Healing melody', 6);
    }
}