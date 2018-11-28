import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {HitAction} from "../actions/hitAction";
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';

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

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'bow_shot': new HitAction(actor, 'Bow shot', 10, 15, DamageTypes.PIERCING),
            'precision_shot': new HitAction(actor,'Precision shot', 20, 30, DamageTypes.PIERCING),
        };
    }
}