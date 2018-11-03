import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";

export class Draconite extends Character {
    actions = {
        'fire_breath': new HitAction('Fire breath', 10, 15, DamageTypes.FIRE),
        'claw strike': new HitAction('Claw strike', 20, 30, DamageTypes.CUTTING),
    };
    health = 120;
    healthMax = 120;
    name = 'Draconite';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };
}