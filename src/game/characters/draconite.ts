import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {ClawStrikeAction} from '../actions/draconite/clawStrikeAction';
import {BuffAction} from '../actions/buffAction';
import {FlamingArmorEffect} from '../effects/draconite/flamingArmorEffect';
import {PoisonBiteAction} from '../actions/draconite/poisonBiteAction';
import {WingsOfSteelEffect} from '../effects/wingsOfSteelEffect';
import {HighVitalityEffect} from '../effects/draconite/highVitalityEffect';
import {SummonAction} from '../actions/summonAction';
import {Imp} from './summons/draconite/imp';
import {IAction} from '../../models/action';

export class Draconite extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Draconite';
    resists = {
        [DamageTypes.POISON]: 1.25,
        [DamageTypes.DEATH]: 1,
        [DamageTypes.HOLY]: 1,
        [DamageTypes.SHADOW]: 1,
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 0.75,
        [DamageTypes.PIERCING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1.25
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'tail_sweep': new HitAction(this, 'Tail sweep', 4, 7, DamageTypes.BLUNT, 0.1, 1.5),
            'claw strike': new ClawStrikeAction(this),
            'fire_breath': new HitAction(this, 'Fire breath', 5, 8, DamageTypes.FIRE),
            'flaming_armor': new BuffAction(this, FlamingArmorEffect, 'Flaming armor', 5),
            'poison_bite': new PoisonBiteAction(this),
            'wings_of_steel': new BuffAction(this, WingsOfSteelEffect, 'Wings of steel', 6),
            'high_vitality': new BuffAction(this, HighVitalityEffect, 'High vitality', 6),
            'summon_imp': new SummonAction(this, 'Summon Imp', 'imp', Imp),
        };
    }
}