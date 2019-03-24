import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export class Monk extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Monk';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'fist_strike': new HitAction(this,'Fist strike', 10, 15, DamageTypes.BLUNT),
            'monkey_hook': new HitAction(this, 'Monkey hook', 20, 30, DamageTypes.BLUNT),
        };
    }
}