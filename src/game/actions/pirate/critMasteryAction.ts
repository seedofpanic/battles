import {BuffAction} from '../buffAction';
import {CritMasteryEffect} from '../../effects/pirate/critMasteryEffect';
import {IUnit} from '../../../models/unit';

export class CritMasteryAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, CritMasteryEffect, 'Crit mastery', 6);
    }
}