import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {Action} from '../action';
import {ShurikenHurlAction} from '../actions/ninja/shurikenHurlAction';
import {PoisonKunaiAction} from '../actions/ninja/poisonKunaiAction';
import {SuddenStrikeAction} from '../actions/ninja/suddenStrikeAction';
import {BloodyWoundAction} from '../actions/ninja/bloodyWoundAction';
import {StunGrenadeAction} from '../actions/ninja/stunGrenadeAction';
import {ChainShackleAction} from '../actions/ninja/chainShackleAction';
import {PoisonBladeAction} from '../actions/ninja/PoisonBladeAction';
import {VanishAction} from '../actions/ninja/vanishAction';

export class Ninja extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name =  'Ninja';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'shuriken_hurl': new ShurikenHurlAction(actor),
            'poisoned_kunai': new PoisonKunaiAction(actor),
            'sudden_strike': new SuddenStrikeAction(actor),
            'bloody_wound': new BloodyWoundAction(actor),
            'stun_grenade': new StunGrenadeAction(actor),
            'chain_shackle': new ChainShackleAction(actor),
            'poison_blade': new PoisonBladeAction(actor),
            'vanish': new VanishAction(actor)
        };
    }
}