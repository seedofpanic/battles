import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";

export class Pirate extends Character {
    id = 'pirate';
    actions = {
        'fire_breath': new HitAction('Hearting song', 10, 15, DamageTypes.PIERCING),
        'guitar_strike': new HitAction('Guitar strike', 20, 30, DamageTypes.BLUNT),
    };
    health = 120;
    healthMax = 120;
    name =  'Pirate';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };
}