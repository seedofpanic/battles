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

    constructor(id: string) {
        super(id);

        this.actions = {
            'axe_strike': new AxeStrikeAction(this),
            'axe_throw': new AxeThrowAction(this),
            'dwarf_ale': new DwarfAleAction(this),
            'magic_proof': new MagicProofAction(this),
            'underground_roar': new UndergroundRoarAction(this),
            'dwarf_armor': new DwarfArmorAction(this),
            'dwarfrage': new DwarfrageAction(this)
        };
    }
}