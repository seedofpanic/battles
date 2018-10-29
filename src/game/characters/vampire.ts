import {Character} from '../character';
import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {SwordAction} from '../actions/swordAction';
import {VampireBiteAction} from '../actions/vampireBiteAction';
import {RemoveEffectsAction} from '../actions/removeEffectsAction';
import {ShadowBoltAction} from '../actions/shadowBoltAction';

export class Vampire extends Character {
    id = 'vampire';
    actions = {
        'slash': new SwordAction(),
        'bite': new VampireBiteAction(),
        'shadow_step': new RemoveEffectsAction('Shadow step'),
        'shadow_bolt': new ShadowBoltAction()
    };
    health = 80;
    healthMax = 80;
    name = 'Vampire';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 0.7,
        [DamageTypes.FROST]: 0.7
    };
}