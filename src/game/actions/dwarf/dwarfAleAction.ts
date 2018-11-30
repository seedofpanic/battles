import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {DwarfAleEffect} from '../../effects/dwarf/dwarfAleEffect';

export class DwarfAleAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, DwarfAleEffect, 'Dwarf ale', 6);
    }
}