import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
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

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'lite_strike': new LiteStrikeAction(source),
            'self_heal': new SelfHealAction(source),
            'flash_of_lite': new FlashOfLiteAction(source),
            'great_miracle': new GreatMiracleAction(source),
            'invulnerability': new InvulnerabilityAction(source),
            'pray_of_lite': new PrayOfLiteAction(source),
            'death_pray': new DeathPrayAction(source),
            'lite_blow': new LiteBlowAction(source),

        };
    }
}