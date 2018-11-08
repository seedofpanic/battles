import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {SwordAction} from '../actions/swordAction';
import {VampireBiteAction} from '../actions/vampireBiteAction';
import {RemoveEffectsAction} from '../actions/removeEffectsAction';
import {ShadowBoltAction} from '../actions/shadowBoltAction';
import {HitAction} from '../actions/hitAction';
import {BuffAction} from '../actions/buffAction';
import {ShadowGuardEffect} from '../effects/shadowGuardEffect';
import {BloodArmorEffect} from '../effects/bloodArmorEffect';
import {DeadlyKinshipAction} from '../actions/deadlyKinshipAction';
import {BloodySymbolAction} from '../actions/bloodySymbolAction';
import {CHEAT_DEATH_ACTION_ID, CheatDeathAction} from '../actions/cheatDeathAction';

export class Vampire extends Character {
    actions = {
        'claws_strike': new HitAction('Claws strike', 2, 4, DamageTypes.CUTTING, 0.12, 1.3),
        'bite': new VampireBiteAction(),
        'shadow_guard': new BuffAction(ShadowGuardEffect, 'Shadow guard'),
        'blood_armor': new BuffAction(BloodArmorEffect, 'Blood armor'),
        'doom_strike': new HitAction('Doom strike', 4, 7, DamageTypes.DEATH, 0.15, 1.5),
        'deadly_kinship': new DeadlyKinshipAction(),
        'Bloody_symbol': new BloodySymbolAction(),
        [CHEAT_DEATH_ACTION_ID]: new CheatDeathAction()
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