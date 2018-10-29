import {Character} from '../character';
import {FrostArrowAction} from '../actions/frostArrowAction';
import {FireBallAction} from '../actions/fireBallAction';
import {DamageTypes} from '../models/damageTypes';

export class Mage extends Character {
    id = 'mage';
    actions = {
        'fire_ball': new FireBallAction(),
        'frost_arrow': new FrostArrowAction(),
    };
    health = 70;
    healthMax = 70;
    name = 'Mage';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 0.5,
        [DamageTypes.FROST]: 0.5,
    };
}