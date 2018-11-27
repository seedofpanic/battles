import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {Action} from '../action';
import {InsectsSwarmAction} from '../actions/druid/insectsSwarmAction';
import {NatureWrathAction} from '../actions/druid/natureWrathAction';
import {PoisonSkinAction} from '../actions/druid/poisonSkinAction';
import {NatureHealAction} from '../actions/druid/natureHealAction';
import {BlessOfNatureAction} from '../actions/druid/blessOfNatureAction';
import {NatureProtectionAction} from '../actions/druid/natureProtectionAction';
import {SpinesAction} from '../actions/druid/spinesAction';
import {GreatExileAction} from '../actions/druid/greatExileAction';

export class Druid extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Druid';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'insects_swarm': new InsectsSwarmAction(actor),
            'nature_wrath': new NatureWrathAction(actor),
            'poison_skin': new PoisonSkinAction(actor),
            'nature_heal': new NatureHealAction(actor),
            'bless_of_nature': new BlessOfNatureAction(actor),
            'nature_protection': new NatureProtectionAction(actor),
            'spines': new SpinesAction(actor),
            'great_exile': new GreatExileAction(actor),
        };
    }
}