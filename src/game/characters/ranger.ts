import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {Unit} from '../unit';
import {Action} from '../action';

export class Ranger extends Character {
    actions: { [name: string]: Action };
    health = 120;
    healthMax = 120;
    name = 'Ranger';
    resists = {
        [DamageTypes.BLUNT]: 1.5,
        [DamageTypes.CUTTING]: 1.7,
        [DamageTypes.FIRE]: 1.5,
        [DamageTypes.FROST]: 1.5,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'bow_shot': new HitAction(actor, 'Bow shot', 10, 15, DamageTypes.PIERCING),
            'precision_shot': new HitAction(actor,'Precision shot', 20, 30, DamageTypes.PIERCING),
        };
    }
}