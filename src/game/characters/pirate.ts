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
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'broadsword_slash': new BroadswordSlashAction(actor),
            'grand_rum': new GrandRumAction(actor),
            'pistol_shot': new PistolShotAction(actor),
            'holly_grenade': new HollyGrenadeAction(actor),
            'pirate_tincture': new PirateTinctureAction(actor),
            'healing_rum': new HealingRumAction(actor),
            'arrr': new ArrrAction(actor),
            'crit_mastery': new CritMasteryAction(actor),
        };
    }
}