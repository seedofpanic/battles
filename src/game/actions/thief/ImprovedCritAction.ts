import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {ImprovedCritEffect} from '../../effects/thief/improvedCritEffect';

export class ImprovedCritAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, ImprovedCritEffect, 'Improved crit', 6);
    }
}