import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {CritMasteryEffect} from '../../effects/pirate/critMasteryEffect';

export class CritMasteryAction extends BuffAction {
    constructor(source: Unit) {
        super(source, CritMasteryEffect, 'Crit mastery', 6);
    }
}