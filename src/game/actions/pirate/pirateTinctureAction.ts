import {BuffAction} from '../buffAction';
import {PirateTinctureEffect} from '../../effects/pirate/pirateTinctureEffect';
import {IUnit} from '../../../models/unit';

export class PirateTinctureAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, PirateTinctureEffect, 'Pirate tincture', 5);
    }
}