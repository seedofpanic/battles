import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {Action} from '../action';
import {PistolShotAction} from '../actions/pirate/pistolShotAction';
import {HollyGrenadeAction} from '../actions/pirate/hollyGrenadeAction';
import {PirateTinctureAction} from '../actions/pirate/pirateTinctureAction';
import {HealingRumAction} from '../actions/pirate/HealingRumAction';
import {ArrrAction} from '../actions/pirate/arrrAction';
import {CritMasteryAction} from '../actions/pirate/critMasteryAction';
import {BroadswordSlashAction} from '../actions/pirate/broadswordSlashAction';
import {GrandRumAction} from '../actions/pirate/grandRumAction';

export class Pirate extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name =  'Pirate';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'broadsword_slash': new BroadswordSlashAction(source),
            'grand_rum': new GrandRumAction(source),
            'pistol_shot': new PistolShotAction(source),
            'holly_grenade': new HollyGrenadeAction(source),
            'pirate_tincture': new PirateTinctureAction(source),
            'healing_rum': new HealingRumAction(source),
            'arrr': new ArrrAction(source),
            'crit_mastery': new CritMasteryAction(source),
        };
    }
}