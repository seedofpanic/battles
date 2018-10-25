import {Character} from '../character';
import {Action} from '../action';
import {HitAction} from '../actions/hitAction';
import {DamageTypes} from '../models/damageTypes';

export class Barbarian extends Character {
    getName(): string {
        return 'Barbarian';
    }

    getHealthMax(): number {
        return 140;
    }

    getActions(): { [p: string]: Action } {
        return {
            'bare_hand_strike': new HitAction('Bare hand strike', 5, 7, DamageTypes.BLUNT, 0.1, 1.5),
            'bare_feet_strike': new HitAction('Bare feet strike', 3, 9, DamageTypes.BLUNT, 0.2, 3),
        };
    }

    getResists(): { [p: string]: number } {
        return {
            [DamageTypes.BLUNT]: 1.2,
            [DamageTypes.CUTTING]: 1.4,
            [DamageTypes.FIRE]: 1.5,
            [DamageTypes.FROST]: 1.1,
        };
    }
}