import {Character} from '../character';
import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {SwordAction} from '../actions/swordAction';
import {VampireBiteAction} from '../actions/vampireBiteAction';
import {RemoveEffectsAction} from '../actions/removeEffectsAction';
import {ShadowBoltAction} from '../actions/shadowBoltAction';

export class Vampire extends Character {
    getName(): string {
        return 'Vampire';
    }

    getHealthMax(): number {
        return 80;
    }

    getActions(): { [p: string]: Action } {
        return {
            'slash': new SwordAction(),
            'bite': new VampireBiteAction(),
            'shadow_step': new RemoveEffectsAction('Shadow step'),
            'shadow_bolt': new ShadowBoltAction()
        };
    }

    getResists(): { [p: string]: number } {
        return {
            [DamageTypes.BLUNT]: 1.3,
            [DamageTypes.CUTTING]: 0.9,
            [DamageTypes.FIRE]: 0.7,
            [DamageTypes.FROST]: 0.7
        };
    }

}