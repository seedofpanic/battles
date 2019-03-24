import {BuffAction} from '../buffAction';
import {CritMasteryEffect} from '../../effects/pirate/critMasteryEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class CritMasteryAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, CritMasteryEffect, 'Crit mastery', 6);
    }
}