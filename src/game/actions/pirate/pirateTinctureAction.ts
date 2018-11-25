import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {PirateTinctureEffect} from '../../effects/pirate/pirateTinctureEffect';

export class PirateTinctureAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, PirateTinctureEffect, 'Pirate tincture', 5);
    }
}