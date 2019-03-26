import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {ShurikenHurlAction} from '../actions/ninja/shurikenHurlAction';
import {PoisonKunaiAction} from '../actions/ninja/poisonKunaiAction';
import {SuddenStrikeAction} from '../actions/ninja/suddenStrikeAction';
import {BloodyWoundAction} from '../actions/ninja/bloodyWoundAction';
import {StunGrenadeAction} from '../actions/ninja/stunGrenadeAction';
import {ChainShackleAction} from '../actions/ninja/chainShackleAction';
import {PoisonBladeAction} from '../actions/ninja/PoisonBladeAction';
import {VanishAction} from '../actions/ninja/vanishAction';
import {IAction} from '../../models/action';

export class Ninja extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name =  'Ninja';
    resists = {
        [DamageTypes.POISON]: 0.75,
        [DamageTypes.DEATH]: 1,
        [DamageTypes.HOLY]: 1,
        [DamageTypes.SHADOW]: 0.75,
        [DamageTypes.BLUNT]: 1.25,
        [DamageTypes.CUTTING]: 0.75,
        [DamageTypes.PIERCING]: 0.75,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'shuriken_hurl': new ShurikenHurlAction(this),
            'poisoned_kunai': new PoisonKunaiAction(this),
            'sudden_strike': new SuddenStrikeAction(this),
            'bloody_wound': new BloodyWoundAction(this),
            'stun_grenade': new StunGrenadeAction(this),
            'chain_shackle': new ChainShackleAction(this),
            'poison_blade': new PoisonBladeAction(this),
            'vanish': new VanishAction(this)
        };
    }
}