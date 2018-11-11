import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {HealAction} from "../actions/healAction";
import {Unit} from '../unit';
import {Action} from '../action';

export class Druid extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Druid';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 0.5,
        [DamageTypes.FROST]: 0.5,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'staff_strike': new HitAction(source, 'Staff strike', 10, 20, DamageTypes.BLUNT),
            'touch_of_nature': new HealAction(source,'Touch of Nature', 10),
        };
    }
}