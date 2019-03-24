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
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export class Mage extends Character {
    actions: { [name: string]: IAction };
    health = 70;
    healthMax = 70;
    name = 'Mage';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
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