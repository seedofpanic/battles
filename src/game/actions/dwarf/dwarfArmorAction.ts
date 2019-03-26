import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {DwarfArmorEffect} from '../../effects/dwarf/dwarfArmorEffect';
import {ICharacter} from '../../../models/character';

export class DwarfArmorAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, DwarfArmorEffect, 'Dwarf armor', 3);
    }
}