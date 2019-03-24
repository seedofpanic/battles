import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {InsectsSwarmAction} from '../actions/druid/insectsSwarmAction';
import {NatureWrathAction} from '../actions/druid/natureWrathAction';
import {PoisonSkinAction} from '../actions/druid/poisonSkinAction';
import {NatureHealAction} from '../actions/druid/natureHealAction';
import {BlessOfNatureAction} from '../actions/druid/blessOfNatureAction';
import {NatureProtectionAction} from '../actions/druid/natureProtectionAction';
import {SpinesAction} from '../actions/druid/spinesAction';
import {GreatExileAction} from '../actions/druid/greatExileAction';
import {IAction} from '../../models/action';

export class Druid extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Druid';
    resists = {
        [DamageTypes.POISON]: 1.25,
        [DamageTypes.DEATH]: 1.5,
        [DamageTypes.HOLY]: 1,
        [DamageTypes.SHADOW]: 1,
        [DamageTypes.BLUNT]: 0.5,
        [DamageTypes.CUTTING]: 1.25,
        [DamageTypes.PIERCING]: 1.25,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 0.75
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'insects_swarm': new InsectsSwarmAction(this),
            'nature_wrath': new NatureWrathAction(this),
            'poison_skin': new PoisonSkinAction(this),
            'nature_heal': new NatureHealAction(this),
            'bless_of_nature': new BlessOfNatureAction(this),
            'nature_protection': new NatureProtectionAction(this),
            'spines': new SpinesAction(this),
            'great_exile': new GreatExileAction(this),
        };
    }
}