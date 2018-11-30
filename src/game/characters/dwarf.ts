import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {IAction} from '../../models/action';
import {AxeStrikeAction} from '../actions/dwarf/axeStrikeAction';
import {AxeThrowAction} from '../actions/dwarf/axeThrowAction';
import {DwarfAleAction} from '../actions/dwarf/dwarfAleAction';
import {MagicProofAction} from '../actions/dwarf/magicProofAction';
import {UndergroundRoarAction} from '../actions/dwarf/undergroundRoarAction';
import {DwarfArmorAction} from '../actions/dwarf/dwarfArmorAction';
import {DwarfrageAction} from '../actions/dwarf/dwarfrageAction';

export class Dwarf extends Character {
    actions: { [name: string]: IAction };
    health = 100;
    healthMax = 100;
    name = 'Dwarf';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'axe_strike': new AxeStrikeAction(actor),
            'axe_throw': new AxeThrowAction(actor),
            'dwarf_ale': new DwarfAleAction(actor),
            'magic_proof': new MagicProofAction(actor),
            'underground_roar': new UndergroundRoarAction(actor),
            'dwarf_armor': new DwarfArmorAction(actor),
            'dwarfrage': new DwarfrageAction(actor)
        };
    }
}