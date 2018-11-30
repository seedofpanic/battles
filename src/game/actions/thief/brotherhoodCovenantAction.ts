import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BrotherhoodCovenantEffect} from '../../effects/thief/brotherhoodCovenantEffect';

export class BrotherhoodCovenantAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, BrotherhoodCovenantEffect, 'Brotherhood covenant', 6);
    }
}