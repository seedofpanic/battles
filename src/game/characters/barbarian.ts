import {Character} from '../character';
import {HitAction} from '../actions/hitAction';
import {DamageTypes} from '../models/damageTypes';
import {BuffAction} from '../actions/buffAction';
import {BloodRageEffect} from '../effects/bloodRageEffect';
import {DeBuffAction} from '../actions/deBuffAction';
import {BloodSacrificeAction} from '../actions/barbarian/bloodSacrificeAction';
import {SwordCuttingAction} from '../actions/barbarian/swordCuttingAction';
import {BlessOfAncestorsEffect} from '../effects/blessOfAncestorsEffect';
import {StunningRoarEffect} from '../effects/StunningRoarEffect';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';

export class Barbarian extends Character {
    name = 'Barbarian';
    actions: {[name: string]: IAction};
    health = 140;
    healthMax = 140;
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'axe_strike': new HitAction(this, 'Axe strike', 5, 7, DamageTypes.CUTTING, 0.1, 1.5),
            "blood_rage": new BuffAction(this, BloodRageEffect, 'Blood rage', 0, 1),
            'crushing_strike': new HitAction(this, 'Crushing strike', 4, 8, DamageTypes.CUTTING, 0.2, 2),
            'bless_of_ancestors': new BuffAction(this, BlessOfAncestorsEffect, 'Bless of ancestors', 0),
            'stunning_roar': new DeBuffAction(this, StunningRoarEffect, 'Stunning roar', 0, 1),
            'berserk_power': new HitAction(this, 'Berserk power', 6, 10, DamageTypes.CUTTING, 0.3, 3),
            'blood_sacrifice': new BloodSacrificeAction(this),
            'bleeding_wound': new SwordCuttingAction(this)
        };
    }
}