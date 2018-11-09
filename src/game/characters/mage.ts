import {Character} from '../character';
import {FrostArrowAction} from '../actions/frostArrowAction';
import {FireBallAction} from '../actions/fireBallAction';
import {DamageTypes} from '../models/damageTypes';
import {BuffAction} from '../actions/buffAction';
import {MagicShieldEffect} from '../effects/magicShieldEffect';
import {DazzleAction} from '../actions/dazzleAction';
import {FireBeamAction} from '../actions/fireBeamAction';
import {StoneSkinEffect} from '../effects/stoneSkinEffect';
import {MagicalBurnAction} from '../actions/magicalBurnAction';
import {DeBuffAction} from '../actions/deBuffAction';
import {FireBurstEffect} from '../effects/fireBurstEffect';
import {BurnicideAction} from '../actions/burnicideAction';

export class Mage extends Character {
    actions = {
        'fireball': new FireBallAction(),
        'magic_shield': new BuffAction(MagicShieldEffect, 'Magic shield'),
        'dazzle': new DazzleAction(),
        'fire_beam': new FireBeamAction(),
        'stone_skin': new BuffAction(StoneSkinEffect, 'Stone skin', 4),
        'magical_burn': new MagicalBurnAction(),
        'fire_burst': new DeBuffAction(FireBurstEffect, 'Fire burst', 5),
        'burnicide': new BurnicideAction(),
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