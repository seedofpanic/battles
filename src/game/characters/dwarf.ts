import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
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
        [DamageTypes.POISON]: 0.25,
        [DamageTypes.DEATH]: 0.75,
        [DamageTypes.HOLY]: 0.75,
        [DamageTypes.SHADOW]: 1,
        [DamageTypes.BLUNT]: 0.5,
        [DamageTypes.CUTTING]: 0.75,
        [DamageTypes.PIERCING]: 0.75,
        [DamageTypes.FIRE]: 0.5,
        [DamageTypes.FROST]: 0.75
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