import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {DwarfAleEffect} from '../../effects/dwarf/dwarfAleEffect';
import {ICharacter} from '../../../models/character';

export class DwarfAleAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, DwarfAleEffect, 'Dwarf ale', 6);
    }
}