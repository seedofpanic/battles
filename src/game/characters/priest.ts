import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {Action} from '../action';
import {SelfHealAction} from '../actions/priest/selfHealAction';
import {FlashOfLiteAction} from '../actions/priest/flashOfLiteAction';
import {GreatMiracleAction} from '../actions/priest/greatMiracleAction';
import {LiteStrikeAction} from '../actions/priest/liteStrikeAction';
import {InvulnerabilityAction} from '../actions/priest/invulnerabilityAction';
import {PrayOfLiteAction} from '../actions/priest/prayOfLiteAction';
import {DeathPrayAction} from '../actions/priest/deathPrayAction';
import {LiteBlowAction} from '../actions/priest/LiteBlowAction';

export class Priest extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Priest';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'lite_strike': new LiteStrikeAction(actor),
            'self_heal': new SelfHealAction(actor),
            'flash_of_lite': new FlashOfLiteAction(actor),
            'great_miracle': new GreatMiracleAction(actor),
            'invulnerability': new InvulnerabilityAction(actor),
            'pray_of_lite': new PrayOfLiteAction(actor),
            'death_pray': new DeathPrayAction(actor),
            'lite_blow': new LiteBlowAction(actor),

        };
    }
}