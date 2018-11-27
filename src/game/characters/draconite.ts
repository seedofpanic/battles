import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {ClawStrikeAction} from '../actions/draconite/clawStrikeAction';
import {BuffAction} from '../actions/buffAction';
import {FlamingArmorEffect} from '../effects/draconite/flamingArmorEffect';
import {Unit} from '../unit';
import {Action} from '../action';
import {PoisonBiteAction} from '../actions/draconite/poisonBiteAction';
import {WingsOfSteelEffect} from '../effects/wingsOfSteelEffect';
import {HighVitalityEffect} from '../effects/draconite/highVitalityEffect';
import {SummonAction} from '../actions/summonAction';
import {Imp} from './summons/draconite/imp';

export class Draconite extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Draconite';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'tail_sweep': new HitAction(actor, 'Tail sweep', 4, 7, DamageTypes.BLUNT, 0.1, 1.5),
            'claw strike': new ClawStrikeAction(actor),
            'fire_breath': new HitAction(actor, 'Fire breath', 5, 8, DamageTypes.FIRE),
            'flaming_armor': new BuffAction(actor, FlamingArmorEffect, 'Flaming armor', 5),
            'poison_bite': new PoisonBiteAction(actor),
            'wings_of_steel': new BuffAction(actor, WingsOfSteelEffect, 'Wings of steel', 6),
            'high_vitality': new BuffAction(actor, HighVitalityEffect, 'High vitality', 6),
            'summon_imp': new SummonAction(actor, 'Summon Imp', 'imp', Imp),
        };
    }
}