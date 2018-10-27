import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {Action} from '../action';
import {HitAction} from "../actions/hitAction";

export class Draconite extends Character {
    getName(): string {
        return 'Draconite';
    }

    getHealthMax(): number {
        return 120;
    }

    getActions(): { [p: string]: Action } {
        return {
            'fire_breath': new HitAction('Fire breath', 10, 15, DamageTypes.FIRE),
            'claw strike': new HitAction('Claw strike', 20, 30, DamageTypes.CUTTING),
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