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
import {IUnit} from '../../models/unit';

export class Druid extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Druid';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
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