import {Character} from '../character';
import {HitAction} from '../actions/hitAction';
import {DamageTypes} from '../models/damageTypes';

export class Barbarian extends Character {
    name = 'Barbarian';
    actions = {
        'bare_hand_strike': new HitAction('Bare hand strike', 5, 7, DamageTypes.BLUNT, 0.1, 1.5),
        'bare_feet_strike': new HitAction('Bare feet strike', 3, 9, DamageTypes.BLUNT, 0.2, 3),
    };
    health = 140;
    healthMax = 140;
    resists = {
        [DamageTypes.BLUNT]: 1.2,
        [DamageTypes.CUTTING]: 1.4,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.1,
    };
}