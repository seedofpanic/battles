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

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'claws_strike': new HitAction(source, 'Claws strike', 2, 4, DamageTypes.CUTTING, 0.12, 1.3),
            'bite': new VampireBiteAction(source),
            'shadow_guard': new BuffAction(source, ShadowGuardEffect, 'Shadow guard'),
            'blood_armor': new BuffAction(source, BloodArmorEffect, 'Blood armor'),
            'doom_strike': new HitAction(source, 'Doom strike', 4, 7, DamageTypes.DEATH, 0.15, 1.5),
            'deadly_kinship': new DeadlyKinshipAction(source),
            'Bloody_symbol': new BloodySymbolAction(source),
            [CHEAT_DEATH_ACTION_ID]: new CheatDeathAction(source)
        };
    }
}