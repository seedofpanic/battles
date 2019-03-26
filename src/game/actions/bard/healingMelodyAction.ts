import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {HealingMelodyEffect} from '../../effects/bard/healingMelodyEffect';
import {ICharacter} from '../../../models/character';

export class HealingMelodyAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, HealingMelodyEffect, 'Healing melody', 6);
    }
}