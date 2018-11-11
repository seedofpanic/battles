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
import {Unit} from '../unit';
import {Action} from '../action';

export class Warrior extends Character {
    actions: { [name: string]: Action };
    health = 100;
    healthMax = 100;
    name = 'Warrior';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'piercing_strike': new PiercingStrikeAction(source),
            'shield_block': new BuffAction(source, ShieldBlockEffect, 'Shield block'),
            'double_strike': new MultipleStrikeAction(source,'Double strike', new PiercingStrikeAction(source), 2, 0.3),
            'shield_of_anger': new BuffAction(source, ShieldOfAngerEffect,'Shield of anger', 3),
            'great_armor': new BuffAction(source, GreatArmorEffect, 'Great armor'),
            'shield_strike': new ShieldAction(source),
            'blade_sweep': new BladeSweepAction(source),
            'boiling_rage': new BuffAction(source, BoilingRageEffect, 'Boiling rage'),
        };
    }
}