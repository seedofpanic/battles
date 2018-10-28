import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {HealAction} from "../actions/healAction";

export class Priest extends Character {
    actions = {
        'fist_strike': new HitAction('Fist strike', 10, 15, DamageTypes.BLUNT),
        'Heal': new HealAction('Heal', 20),
    };
    health = 120;
    healthMax = 120;
    name = 'Priest';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };
}