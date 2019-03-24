import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';
import {AccurateShotAction} from '../actions/ranger/accurateShotAction';
import {TripleShotAction} from '../actions/ranger/tripleShotAction';
import {WolfAction} from '../actions/ranger/wolfAction';
import {HideAction} from '../actions/ranger/hideAction';
import {ExplosionArrowAction} from '../actions/ranger/explosionArrowAction';
import {SmokeScreenAction} from '../actions/ranger/smokeScreenAction';
import {BeastInsideAction} from '../actions/ranger/beastInsideAction';
import {AnimalCareAction} from '../actions/ranger/animalCareAction';

export class Ranger extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Ranger';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'accurate_shot': new AccurateShotAction(this),
            'triple_shot': new TripleShotAction(this),
            'wolf': new WolfAction(this),
            'hide': new HideAction(this),
            'explosion_arrow': new ExplosionArrowAction(this),
            'smoke_screen': new SmokeScreenAction(this),
            'beast_inside': new BeastInsideAction(this),
            'animal_care': new AnimalCareAction(this),
        };
    }
}