import {BuffAction} from '../buffAction';
import {PirateTinctureEffect} from '../../effects/pirate/pirateTinctureEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PirateTinctureAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, PirateTinctureEffect, 'Pirate tincture', 5);
    }
}