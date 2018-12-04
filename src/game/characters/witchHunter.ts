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

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'rapier_attack': new RapierAttackAction(actor),
            'executing_sward': new ExecutingSwardAction(actor),
            'perfect_shot': new PerfectShotAction(actor),
            'curse': new CurseAction(actor),
            'god_armour': new GodArmourAction(actor),
            'healing': new HealingAction(actor),
            'bloody_haze': new BloodyHazeAction(actor),
            'bane': new BaneAction(actor)
        };
    }
}