import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {ImprovedCritEffect} from '../../effects/thief/improvedCritEffect';
import {ICharacter} from '../../../models/character';

export class ImprovedCritAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, ImprovedCritEffect, 'Improved crit', 6);
    }
}