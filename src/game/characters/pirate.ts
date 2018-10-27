import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Action} from '../action';
import {HitAction} from "../actions/hitAction";

export class Pirate extends Character {
    getName(): string {
        return 'Pirate';
    }

    getHealthMax(): number {
        return 120;
    }

    getActions(): { [p: string]: Action } {
        return {
            'fire_breath': new HitAction('Hearting song', 10, 15, DamageTypes.PIERCING),
            'guitar_strike': new HitAction('Guitar strike', 20, 30, DamageTypes.BLUNT),
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