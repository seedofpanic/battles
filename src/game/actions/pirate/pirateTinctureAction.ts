import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {PirateTinctureEffect} from '../../effects/pirate/pirateTinctureEffect';

export class PirateTinctureAction extends BuffAction {
    constructor(source: Unit) {
        super(source, PirateTinctureEffect, 'Pirate tincture', 5);
    }
}