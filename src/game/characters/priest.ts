import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {SelfHealAction} from '../actions/priest/selfHealAction';
import {FlashOfLiteAction} from '../actions/priest/flashOfLiteAction';
import {GreatMiracleAction} from '../actions/priest/greatMiracleAction';
import {LiteStrikeAction} from '../actions/priest/liteStrikeAction';
import {InvulnerabilityAction} from '../actions/priest/invulnerabilityAction';
import {PrayOfLiteAction} from '../actions/priest/prayOfLiteAction';
import {DeathPrayAction} from '../actions/priest/deathPrayAction';
import {LiteBlastAction} from '../actions/priest/LiteBlastAction';
import {IAction} from '../../models/action';

export class Priest extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Priest';
    resists = {
        [DamageTypes.POISON]: 0.5,
        [DamageTypes.DEATH]: 0.5,
        [DamageTypes.HOLY]: 0.25,
        [DamageTypes.SHADOW]: 0.75,
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.PIERCING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'lite_strike': new LiteStrikeAction(this),
            'self_heal': new SelfHealAction(this),
            'flash_of_lite': new FlashOfLiteAction(this),
            'great_miracle': new GreatMiracleAction(this),
            'invulnerability': new InvulnerabilityAction(this),
            'pray_of_lite': new PrayOfLiteAction(this),
            'death_pray': new DeathPrayAction(this),
            'lite_blast': new LiteBlastAction(this),

        };
    }
}