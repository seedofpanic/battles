import {Character} from '../character';
import {SwordCuttingAction} from '../actions/barbarian/swordCuttingAction';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/warrior/shieldAction';
import {SwordAction} from '../actions/swordAction';
import {Unit} from '../unit';
import {Action} from '../action';

export class Dwarf extends Character {
    actions: { [name: string]: Action };
    health = 100;
    healthMax = 100;
    name = 'Dwarf';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'bleeding_wound': new SwordCuttingAction(source),
            'slash': new SwordAction(source),
            'shield_strike': new ShieldAction(source),
        };
    }
}