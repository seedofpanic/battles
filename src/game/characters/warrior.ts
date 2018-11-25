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

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'piercing_strike': new PiercingStrikeAction(actor),
            'shield_block': new BuffAction(actor, ShieldBlockEffect, 'Shield block'),
            'double_strike': new MultipleStrikeAction(actor,'Double strike', new PiercingStrikeAction(actor), 2, 0.3),
            'shield_of_anger': new BuffAction(actor, ShieldOfAngerEffect,'Shield of anger', 3),
            'great_armor': new BuffAction(actor, GreatArmorEffect, 'Great armor'),
            'shield_strike': new ShieldAction(actor),
            'blade_sweep': new BladeSweepAction(actor),
            'boiling_rage': new BuffAction(actor, BoilingRageEffect, 'Boiling rage'),
        };
    }
}