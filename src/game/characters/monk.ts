import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {Unit} from '../unit';
import {Action} from '../action';

export class Monk extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Monk';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'fist_strike': new HitAction(source,'Fist strike', 10, 15, DamageTypes.BLUNT),
            'monkey_hook': new HitAction(source, 'Monkey hook', 20, 30, DamageTypes.BLUNT),
        };
    }
}