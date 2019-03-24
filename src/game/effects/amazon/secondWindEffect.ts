import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export class SecondWindEffect extends Effect {
    constructor(actor: ICharacter) {
        super('second_wind', 'Second wind', 3, actor);
    }

    onDeath(value: number, oldHp: number,
            damage: number, type: DamageTypes, self: ICharacter, action: IAction | IEffect): number {
        return self.health * 0.4;
    }
}