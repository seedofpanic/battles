import {Character} from '../character';
import {SwordCuttingAction} from '../actions/swordCuttingAction';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/shieldAction';
import {SwordAction} from '../actions/swordAction';
import {BuffAction} from '../actions/buffAction';
import {ResistsModEffect} from '../effects/resistsModEffect';
import {PiercingStrikeAction} from '../actions/piercingStrikeAction';
import {MultipleStrikeAction} from '../actions/multipleStrikeAction';
import {ShieldOfAngerEffect} from '../effects/shieldOfAngerEffect';

export class Warrior extends Character {
    id = 'warrior';
    actions = {
        'piercing_strike': new PiercingStrikeAction(),
        'shield_block': new BuffAction(new ResistsModEffect(0.5, 'Shield block', 1), 'Shield block'),
        'double_strike': new MultipleStrikeAction('Double strike', new PiercingStrikeAction(), 2, 0.3),
        'shield_of_anger': new BuffAction(new ShieldOfAngerEffect(),'Shield of anger', 3),
        'shield_strike': new ShieldAction(),
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