import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {Unit} from '../unit';
import {Action} from '../action';

export class Devil extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Devil';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'fire_breath': new HitAction(actor, 'Fire breath', 10, 15, DamageTypes.FIRE),
            'claw strike': new HitAction(actor,'Claw strike', 20, 30, DamageTypes.CUTTING),
        };
    }
}