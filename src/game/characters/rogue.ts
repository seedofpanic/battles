import {Character} from '../character';
import {Action} from '../action';
import {SwordCuttingAction} from '../actions/swordCuttingAction';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/shieldAction';
import {SwordAction} from '../actions/swordAction';

export class Rogue extends Character {
    getName(): string {
        return 'Rogue';
    }

    getHealthMax(): number {
        return 100;
    }

    getActions(): { [p: string]: Action } {
        return {
            'bleeding_wound': new SwordCuttingAction(),
            'slash': new SwordAction(),
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