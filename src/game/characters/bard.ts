import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {IUnit} from '../../models/unit';
import {IAction} from '../../models/action';

export class Bard extends Character {
    actions: {[name: string]: IAction};
    health = 120;
    healthMax = 120;
    name = 'Bard';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'fire_breath': new HitAction(actor, 'Hearting song', 10, 15, DamageTypes.PIERCING),
            'guitar_strike': new HitAction(actor, 'Guitar strike', 20, 30, DamageTypes.BLUNT),
        };
    }
}