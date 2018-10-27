import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Action} from '../action';
import {HitAction} from "../actions/hitAction";

export class Ranger extends Character {
    getName(): string {
        return 'Ranger';
    }

    getHealthMax(): number {
        return 120;
    }

    getActions(): { [p: string]: Action } {
        return {
            'bow_shot': new HitAction('Bow shot', 10, 15, DamageTypes.PIERCING),
            'precision_shot': new HitAction('Precision shot', 20, 30, DamageTypes.PIERCING),
        };
    }

    getResists(): { [p: string]: number } {
        return {
            [DamageTypes.BLUNT]: 1.5,
            [DamageTypes.CUTTING]: 1.7,
            [DamageTypes.FIRE]: 1.5,
            [DamageTypes.FROST]: 1.5,
        };
    }
}