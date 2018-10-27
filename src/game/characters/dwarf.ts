import {Character} from '../character';
import {Action} from '../action';
import {SwordCuttingAction} from '../actions/swordCuttingAction';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/shieldAction';
import {SwordAction} from '../actions/swordAction';

export class Dwarf extends Character {
    getName(): string {
        return 'Dwarf';
    }

    getHealthMax(): number {
        return 100;
    }

    getActions(): { [p: string]: Action } {
        return {
            'bleeding_wound': new SwordCuttingAction(),
            'slash': new SwordAction(),
            'shield_strike': new ShieldAction(),
        };
    }

    getResists(): { [p: string]: number } {
        return {
            [DamageTypes.BLUNT]: 1.3,
            [DamageTypes.CUTTING]: 0.9,
            [DamageTypes.FIRE]: 1.2,
            [DamageTypes.FROST]: 1.1,
        };
    }
}