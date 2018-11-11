import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {Unit} from '../unit';
import {Action} from '../action';

export class Bard extends Character {
    actions: {[name: string]: Action};
    health = 120;
    healthMax = 120;
    name = 'Bard';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'fire_breath': new HitAction(source, 'Hearting song', 10, 15, DamageTypes.PIERCING),
            'guitar_strike': new HitAction(source, 'Guitar strike', 20, 30, DamageTypes.BLUNT),
        };
    }
}