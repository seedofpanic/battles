import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/warrior/shieldAction';
import {BuffAction} from '../actions/buffAction';
import {PiercingStrikeAction} from '../actions/warrior/piercingStrikeAction';
import {MultipleStrikeAction} from '../actions/multipleStrikeAction';
import {ShieldOfAngerEffect} from '../effects/shieldOfAngerEffect';
import {ShieldBlockEffect} from '../effects/shieldBlockEffect';
import {GreatArmorEffect} from '../effects/greatArmorEffect';
import {BladeSweepAction} from '../actions/warrior/bladeSweepAction';
import {BoilingRageEffect} from '../effects/boilingRageEffect';
import {IAction} from '../../models/action';

export class Warrior extends Character {
    actions: { [name: string]: IAction };
    health = 100;
    healthMax = 100;
    name = 'Warrior';
    resists = {
        [DamageTypes.POISON]: 1.25,
        [DamageTypes.DEATH]: 1.25,
        [DamageTypes.HOLY]: 0.75,
        [DamageTypes.SHADOW]: 1.25,
        [DamageTypes.BLUNT]: 0.5,
        [DamageTypes.CUTTING]: 0.5,
        [DamageTypes.PIERCING]: 0.5,
        [DamageTypes.FIRE]: 1.25,
        [DamageTypes.FROST]: 1.25
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'piercing_strike': new PiercingStrikeAction(this),
            'shield_block': new BuffAction(this, ShieldBlockEffect, 'Shield block'),
            'double_strike': new MultipleStrikeAction(this,'Double strike', new PiercingStrikeAction(this), 2, 0.3),
            'shield_of_anger': new BuffAction(this, ShieldOfAngerEffect,'Shield of anger', 3),
            'great_armor': new BuffAction(this, GreatArmorEffect, 'Great armor'),
            'shield_strike': new ShieldAction(this),
            'blade_sweep': new BladeSweepAction(this),
            'boiling_rage': new BuffAction(this, BoilingRageEffect, 'Boiling rage'),
        };
    }
}