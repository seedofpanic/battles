import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {IAction} from '../../models/action';

export class Monk extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Monk';
    resists = {
        [DamageTypes.POISON]: 0.25,
        [DamageTypes.DEATH]: 0.25,
        [DamageTypes.HOLY]: 0.5,
        [DamageTypes.SHADOW]: 1,
        [DamageTypes.BLUNT]: 0.75,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.PIERCING]: 1,
        [DamageTypes.FIRE]: 0.75,
        [DamageTypes.FROST]: 0.75
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'fist_strike': new HitAction(this,'Fist strike', 10, 15, DamageTypes.BLUNT),
            'monkey_hook': new HitAction(this, 'Monkey hook', 20, 30, DamageTypes.BLUNT),
        };
    }
}