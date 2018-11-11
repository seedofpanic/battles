import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {HealAction} from "../actions/healAction";
import {Unit} from '../unit';
import {Action} from '../action';

export class Priest extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Priest';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'fist_strike': new HitAction(source, 'Fist strike', 10, 15, DamageTypes.BLUNT),
            'Heal': new HealAction(source, 'Heal', 20),
        };
    }
}