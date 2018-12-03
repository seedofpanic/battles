import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';

export class SecondWindEffect extends Effect {
    constructor(actor: IUnit) {
        super('second_wind', 'Second wind', 3, actor);
    }

    onDeath(value: number, oldHp: number,
            damage: number, type: DamageTypes, self: IUnit, action: IAction | IEffect): number {
        return self.character.health * 0.2;
    }
}