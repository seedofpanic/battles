import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {PrayAction} from '../actions/paladin/prayAction';
import {SelfAidAction} from '../actions/paladin/selfAidAction';
import {HeavenStrikeAction} from '../actions/paladin/heavenStrikeAction';
import {HammerStrikeAction} from '../actions/paladin/hammerStrikeAction';
import {BlindingFlashAction} from '../actions/paladin/blindingFlashAction';
import {GreatShieldOfLiteAction} from '../actions/paladin/greatShieldOfLiteAction';
import {ChoppingAction} from '../actions/paladin/choppingAction';
import {FaithPowerAction} from '../actions/paladin/faithPowerAction';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';


export class Paladin extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name =  'Paladin';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'pray': new PrayAction(this),
            'self_aid': new SelfAidAction(this),
            'heaven_strike': new HeavenStrikeAction(this),
            'hammer_strike': new HammerStrikeAction(this),
            'blinding_flash': new BlindingFlashAction(this),
            'great_shield_of_lite': new GreatShieldOfLiteAction(this),
            'chopping': new ChoppingAction(this),
            'faith_power': new FaithPowerAction(this)
        };
    }
}