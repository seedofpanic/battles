import {Effect} from '../effect';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {IEffect} from '../../models/effect';

export const CHEAT_DEATH_EFFECT_ID = 'cheat_death';

export class CheatDeathEffect extends Effect {
    constructor(actor: IUnit) {
        super(CHEAT_DEATH_EFFECT_ID, 'Cheat death', 3, actor);
    }

    onDeath(value: number, oldHp: number,
            damage: number, type: DamageTypes, self: IUnit, action: IAction | IEffect): number {
        if (Math.random() > 0.5) {
            return self.character.healthMax;
        }

        return value;
    }
}