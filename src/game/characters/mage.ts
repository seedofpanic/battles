import {Character} from '../character';
import {FrostArrowAction} from '../actions/frostArrowAction';
import {FireBallAction} from '../actions/fireBallAction';
import {DamageTypes} from '../models/damageTypes';
import {Action} from '../action';

export class Mage extends Character {
    getName(): string {
        return 'Mage';
    }

    getHealthMax(): number {
        return 70;
    }

    getActions(): { [p: string]: Action } {
        return {
            'fire_ball': new FireBallAction(),
            'frost_arrow': new FrostArrowAction(),
        };
    }

    getResists(): { [p: string]: number } {
        return {
            [DamageTypes.BLUNT]: 1.5,
            [DamageTypes.CUTTING]: 1.7,
            [DamageTypes.FIRE]: 0.5,
            [DamageTypes.FROST]: 0.5,
        };
    }
}