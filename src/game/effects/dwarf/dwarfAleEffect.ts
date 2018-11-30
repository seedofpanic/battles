import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class DwarfAleEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('dwarf_ale', 'Dwarf ale', 3, 1.2, actor);
    }

    critChanceMod(value: number, type: DamageTypes): number {
        return value + 0.05;
    }

    critMod(value: number, type: DamageTypes) {
        return value + 1.5;
    }
}