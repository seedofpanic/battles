import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {BoneSpikeAction} from '../actions/necromancer/boneSpikeAction';
import {WeaknessAction} from '../actions/necromancer/weaknessAction';
import {DeathTouchAction} from '../actions/necromancer/deathTouchAction';
import {SkeletonAction} from '../actions/necromancer/skeletonAction';
import {BoneArmorAction} from '../actions/necromancer/boneArmorAction';
import {UndeadPowerAction} from '../actions/necromancer/undeadPowerAction';
import {UndeadAuraAction} from '../actions/necromancer/undeadAuraAction';
import {DeathBreathAction} from '../actions/necromancer/deathBreathAction';

export class Necromancer extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name =  'Necromancer';
    resists = {
        [DamageTypes.POISON]: 0.5,
        [DamageTypes.DEATH]: 0.25,
        [DamageTypes.HOLY]: 1.5,
        [DamageTypes.SHADOW]: 0.5,
        [DamageTypes.BLUNT]: 1.25,
        [DamageTypes.CUTTING]: 0.75,
        [DamageTypes.PIERCING]: 0.5,
        [DamageTypes.FIRE]: 0.75,
        [DamageTypes.FROST]: 0.75
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'bone_spike': new BoneSpikeAction(this),
            'weakness': new WeaknessAction(this),
            'death_touch': new DeathTouchAction(this),
            'skeleton': new SkeletonAction(this),
            'bone_armor': new BoneArmorAction(this),
            'undead_power': new UndeadPowerAction(this),
            'undead_aura': new UndeadAuraAction(this),
            'death_breath': new DeathBreathAction(this)
        };
    }
}