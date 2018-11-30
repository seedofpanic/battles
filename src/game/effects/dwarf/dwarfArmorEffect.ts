import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class DwarfArmorEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('dwarf_armor', {
            [DamageTypes.BLUNT]: 0.9,
            [DamageTypes.CUTTING]: 0.9,
            [DamageTypes.PIERCING]: 0.9,
        }, 'Dwarf armor', 3, actor);
    }
}