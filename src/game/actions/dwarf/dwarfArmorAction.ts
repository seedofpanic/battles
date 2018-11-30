import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {DwarfArmorEffect} from '../../effects/dwarf/dwarfArmorEffect';

export class DwarfArmorAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, DwarfArmorEffect, 'Dwarf armor', 3);
    }
}