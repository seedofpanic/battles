import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Action} from '../action';
import {HitAction} from "../actions/hitAction";

export class Monk extends Character {
    getName(): string {
        return 'Monk';
    }

    getHealthMax(): number {
        return 120;
    }

    getActions(): { [p: string]: Action } {
        return {
            'fist_strike': new HitAction('Fist strike', 10, 15, DamageTypes.BLUNT),
            'monkey hook': new HitAction('Monkey hook', 20, 30, DamageTypes.BLUNT),
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