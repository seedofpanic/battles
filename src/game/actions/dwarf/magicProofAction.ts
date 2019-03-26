import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {MagicProofEffect} from '../../effects/dwarf/magicProofEffect';
import {ICharacter} from '../../../models/character';

export class MagicProofAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, MagicProofEffect, 'Magic proof', 6);
    }
}