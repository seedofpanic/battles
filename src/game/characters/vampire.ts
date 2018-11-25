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
import {Unit} from '../unit';
import {Action} from '../action';

export class Vampire extends Character {
    actions: { [name: string]: Action };
    health = 80;
    healthMax = 80;
    name = 'Vampire';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 0.7,
        [DamageTypes.FROST]: 0.7
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'claws_strike': new HitAction(actor, 'Claws strike', 2, 4, DamageTypes.CUTTING, 0.12, 1.3),
            'bite': new VampireBiteAction(actor),
            'shadow_guard': new BuffAction(actor, ShadowGuardEffect, 'Shadow guard'),
            'blood_armor': new BuffAction(actor, BloodArmorEffect, 'Blood armor'),
            'doom_strike': new HitAction(actor, 'Doom strike', 4, 7, DamageTypes.DEATH, 0.15, 1.5),
            'deadly_kinship': new DeadlyKinshipAction(actor),
            'Bloody_symbol': new BloodySymbolAction(actor),
            [CHEAT_DEATH_ACTION_ID]: new CheatDeathAction(actor)
        };
    }
}