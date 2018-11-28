import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';
import {BoneSpikeAction} from '../actions/necromancer/boneSpikeAction';
import {CurseAction} from '../actions/necromancer/curseAction';
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
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'bone_spike': new BoneSpikeAction(actor),
            'curse': new CurseAction(actor),
            'death_touch': new DeathTouchAction(actor),
            'skeleton': new SkeletonAction(actor),
            'bone_armor': new BoneArmorAction(actor),
            'undead_power': new UndeadPowerAction(actor),
            'undead_aura': new UndeadAuraAction(actor),
            'death_breath': new DeathBreathAction(actor)
        };
    }
}