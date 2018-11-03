import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";

export class Ranger extends Character {
    actions = {
        'bow_shot': new HitAction('Bow shot', 10, 15, DamageTypes.PIERCING),
        'precision_shot': new HitAction('Precision shot', 20, 30, DamageTypes.PIERCING),
    };
    health = 120;
    healthMax = 120;
    name = 'Ranger';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };
}