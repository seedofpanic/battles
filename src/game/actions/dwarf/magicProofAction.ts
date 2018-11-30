import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {MagicProofEffect} from '../../effects/dwarf/magicProofEffect';

export class MagicProofAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, MagicProofEffect, 'Magic proof', 6);
    }
}