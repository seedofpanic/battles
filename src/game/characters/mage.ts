import {Character} from '../character';
import {FireBallAction} from '../actions/mage/fireBallAction';
import {DamageTypes} from '../models/damageTypes';
import {BuffAction} from '../actions/buffAction';
import {MagicShieldEffect} from '../effects/magicShieldEffect';
import {DazzleAction} from '../actions/mage/dazzleAction';
import {FireBeamAction} from '../actions/mage/fireBeamAction';
import {StoneSkinEffect} from '../effects/stoneSkinEffect';
import {MagicalBurnAction} from '../actions/mage/magicalBurnAction';
import {DeBuffAction} from '../actions/deBuffAction';
import {FireBurstEffect} from '../effects/fireBurstEffect';
import {BurnicideAction} from '../actions/mage/burnicideAction';
import {IAction} from '../../models/action';

export class Mage extends Character {
    actions: { [name: string]: IAction };
    health = 70;
    healthMax = 70;
    name = 'Mage';
    resists = {
        [DamageTypes.POISON]: 1.25,
        [DamageTypes.DEATH]: 0.75,
        [DamageTypes.HOLY]: 0.75,
        [DamageTypes.SHADOW]: 0.75,
        [DamageTypes.BLUNT]: 1.25,
        [DamageTypes.CUTTING]: 1.5,
        [DamageTypes.PIERCING]: 1.25,
        [DamageTypes.FIRE]: 0.5,
        [DamageTypes.FROST]: 0.5
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'fireball': new FireBallAction(this),
            'magic_shield': new BuffAction(this, MagicShieldEffect, 'Magic shield'),
            'dazzle': new DazzleAction(this),
            'fire_beam': new FireBeamAction(this),
            'stone_skin': new BuffAction(this, StoneSkinEffect, 'Stone skin', 4),
            'magical_burn': new MagicalBurnAction(this),
            'fire_burst': new DeBuffAction(this, FireBurstEffect, 'Fire burst', 5),
            'burnicide': new BurnicideAction(this),
        };
    }
}