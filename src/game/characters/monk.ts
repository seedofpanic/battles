import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";

export class Monk extends Character {
    actions = {
        'fist_strike': new HitAction('Fist strike', 10, 15, DamageTypes.BLUNT),
        'monkey hook': new HitAction('Monkey hook', 20, 30, DamageTypes.BLUNT),
    };
    health = 120;
    healthMax = 120;
    name = 'Monk';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };
}