import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {PistolShotAction} from '../actions/pirate/pistolShotAction';
import {HollyGrenadeAction} from '../actions/pirate/hollyGrenadeAction';
import {PirateTinctureAction} from '../actions/pirate/pirateTinctureAction';
import {HealingRumAction} from '../actions/pirate/HealingRumAction';
import {ArrrAction} from '../actions/pirate/arrrAction';
import {CritMasteryAction} from '../actions/pirate/critMasteryAction';
import {BroadswordSlashAction} from '../actions/pirate/broadswordSlashAction';
import {GrandRumAction} from '../actions/pirate/grandRumAction';
import {IAction} from '../../models/action';

export class Pirate extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name =  'Pirate';
    resists = {
        [DamageTypes.POISON]: 1,
        [DamageTypes.DEATH]: 1,
        [DamageTypes.HOLY]: 1,
        [DamageTypes.SHADOW]: 1,
        [DamageTypes.BLUNT]: 0.75,
        [DamageTypes.CUTTING]: 0.5,
        [DamageTypes.PIERCING]: 0.5,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'broadsword_slash': new BroadswordSlashAction(this),
            'grand_rum': new GrandRumAction(this),
            'pistol_shot': new PistolShotAction(this),
            'holly_grenade': new HollyGrenadeAction(this),
            'pirate_tincture': new PirateTinctureAction(this),
            'healing_rum': new HealingRumAction(this),
            'arrr': new ArrrAction(this),
            'crit_mastery': new CritMasteryAction(this),
        };
    }
}