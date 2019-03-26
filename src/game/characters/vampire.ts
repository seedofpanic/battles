import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {VampireBiteAction} from '../actions/vampire/vampireBiteAction';
import {HitAction} from '../actions/hitAction';
import {BuffAction} from '../actions/buffAction';
import {ShadowGuardEffect} from '../effects/shadowGuardEffect';
import {BloodArmorEffect} from '../effects/bloodArmorEffect';
import {DeadlyKinshipAction} from '../actions/vampire/deadlyKinshipAction';
import {BloodySymbolAction} from '../actions/vampire/bloodySymbolAction';
import {CHEAT_DEATH_ACTION_ID, CheatDeathAction} from '../actions/vampire/cheatDeathAction';
import {IAction} from '../../models/action';

export class Vampire extends Character {
    actions: { [name: string]: IAction };
    health = 80;
    healthMax = 80;
    name = 'Vampire';
    resists = {
        [DamageTypes.POISON]: 0.75,
        [DamageTypes.DEATH]: 0.25,
        [DamageTypes.HOLY]: 1.5,
        [DamageTypes.SHADOW]: 0.5,
        [DamageTypes.BLUNT]: 0.5,
        [DamageTypes.CUTTING]: 0.5,
        [DamageTypes.PIERCING]: 0.75,
        [DamageTypes.FIRE]: 1.25,
        [DamageTypes.FROST]: 1.25
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'claws_strike': new HitAction(this, 'Claws strike', 2, 4, DamageTypes.CUTTING, 0.12, 1.3),
            'bite': new VampireBiteAction(this),
            'shadow_guard': new BuffAction(this, ShadowGuardEffect, 'Shadow guard'),
            'blood_armor': new BuffAction(this, BloodArmorEffect, 'Blood armor'),
            'doom_strike': new HitAction(this, 'Doom strike', 4, 7, DamageTypes.DEATH, 0.15, 1.5),
            'deadly_kinship': new DeadlyKinshipAction(this),
            'Bloody_symbol': new BloodySymbolAction(this),
            [CHEAT_DEATH_ACTION_ID]: new CheatDeathAction(this)
        };
    }
}