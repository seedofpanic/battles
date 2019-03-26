import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BrotherhoodCovenantEffect} from '../../effects/thief/brotherhoodCovenantEffect';
import {ICharacter} from '../../../models/character';

export class BrotherhoodCovenantAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, BrotherhoodCovenantEffect, 'Brotherhood covenant', 6);
    }
}