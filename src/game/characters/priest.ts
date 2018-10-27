import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Action} from '../action';
import {HitAction} from "../actions/hitAction";
import {HealAction} from "../actions/healAction";

export class Priest extends Character {
    getName(): string {
        return 'Priest';
    }

    getHealthMax(): number {
        return 120;
    }

    getActions(): { [p: string]: Action } {
        return {
            'fist_strike': new HitAction('Fist strike', 10, 15, DamageTypes.BLUNT),
            'Heal': new HealAction('Heal', 20),
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