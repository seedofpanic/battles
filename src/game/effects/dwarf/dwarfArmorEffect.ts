import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class DwarfArmorEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('dwarf_armor', {
            [DamageTypes.BLUNT]: 0.9,
            [DamageTypes.CUTTING]: 0.9,
            [DamageTypes.PIERCING]: 0.9,
        }, 'Dwarf armor', 3, actor);
    }
}