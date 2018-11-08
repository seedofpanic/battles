import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/shieldAction';
import {BuffAction} from '../actions/buffAction';
import {PiercingStrikeAction} from '../actions/piercingStrikeAction';
import {MultipleStrikeAction} from '../actions/multipleStrikeAction';
import {ShieldOfAngerEffect} from '../effects/shieldOfAngerEffect';
import {SummonAction} from '../actions/summonAction';
import {Dog} from './summons/dog';
import {ShieldBlockEffect} from '../effects/shieldBlockEffect';

export class Warrior extends Character {
    actions = {
        'piercing_strike': new PiercingStrikeAction(),
        'shield_block': new BuffAction(ShieldBlockEffect, 'Shield block'),
        'double_strike': new MultipleStrikeAction('Double strike', new PiercingStrikeAction(), 2, 0.3),
        'shield_of_anger': new BuffAction(ShieldOfAngerEffect,'Shield of anger', 3),
        'shield_strike': new ShieldAction(),
        'summon_dog': new SummonAction('Summon dog', 'dog', Dog)
    };
    health = 100;
    healthMax = 100;
    name = 'Warrior';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };
}