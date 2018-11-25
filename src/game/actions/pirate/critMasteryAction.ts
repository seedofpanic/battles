import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {CritMasteryEffect} from '../../effects/pirate/critMasteryEffect';

export class CritMasteryAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, CritMasteryEffect, 'Crit mastery', 6);
    }
}