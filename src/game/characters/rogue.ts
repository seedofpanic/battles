import {Character} from '../character';
import {SwordCuttingAction} from '../actions/swordCuttingAction';
import {DamageTypes} from '../models/damageTypes';
import {SwordAction} from '../actions/swordAction';

export class Rogue extends Character {
    id = 'rogue';
    actions = {
        'bleeding_wound': new SwordCuttingAction(),
        'slash': new SwordAction(),
    };
    health = 100;
    healthMax = 100;
    name = 'Rogue';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };
}