import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';
import {RapierAttackAction} from '../actions/witchHunter/rapierAttackAction';
import {ExecutingSwardAction} from '../actions/witchHunter/executingSwardAction';
import {PerfectShotAction} from '../actions/witchHunter/perfectShotAction';
import {GodArmourAction} from '../actions/witchHunter/godArmourAction';
import {CurseAction} from '../actions/witchHunter/curseAction';
import {HealingAction} from '../actions/witchHunter/healingAction';
import {BloodyHazeAction} from '../actions/witchHunter/bloodyHazeAction';
import {BaneAction} from '../actions/witchHunter/baneAction';

export class WitchHunter extends Character {
    actions: { [name: string]: IAction };
    health = 100;
    healthMax = 100;
    name = 'Witch hunter';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'rapier_attack': new RapierAttackAction(this),
            'executing_sward': new ExecutingSwardAction(this),
            'perfect_shot': new PerfectShotAction(this),
            'curse': new CurseAction(this),
            'god_armour': new GodArmourAction(this),
            'healing': new HealingAction(this),
            'bloody_haze': new BloodyHazeAction(this),
            'bane': new BaneAction(this)
        };
    }
}