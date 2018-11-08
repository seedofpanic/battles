import {Character} from '../character';
import {HitAction} from '../actions/hitAction';
import {DamageTypes} from '../models/damageTypes';
import {BuffAction} from '../actions/buffAction';
import {BloodRageEffect} from '../effects/bloodRageEffect';
import {DeBuffAction} from '../actions/deBuffAction';
import {BloodSacrificeAction} from '../actions/bloodSacrificeAction';
import {SwordCuttingAction} from '../actions/swordCuttingAction';
import {BlessOfAncestorsEffect} from '../effects/blessOfAncestorsEffect';
import {StunningRoarEffect} from '../effects/StunningRoarEffect';

export class Barbarian extends Character {
    name = 'Barbarian';
    actions = {
        'axe_strike': new HitAction('Axe strike', 5, 7, DamageTypes.CUTTING, 0.1, 1.5),
        'blood_rage': new BuffAction(BloodRageEffect, 'Blood rage', 0, 1),
        'crushing_strike': new HitAction('Crushing strike', 4, 8, DamageTypes.CUTTING, 0.2, 2),
        'bless_of_ancestors': new BuffAction(BlessOfAncestorsEffect, 'Bless of ancestors', 0),
        'stunning_roar': new DeBuffAction(StunningRoarEffect, 'Stunning roar', 0, 1),
        'berserk_power': new HitAction('Berserk power', 6, 10, DamageTypes.CUTTING, 0.3, 3),
        'blood_sacrifice': new BloodSacrificeAction(),
        'bleeding_wound': new SwordCuttingAction()
    };
    health = 140;
    healthMax = 140;
    resists = {
        [DamageTypes.BLUNT]: 1.2,
        [DamageTypes.CUTTING]: 1.4,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.1,
    };
}