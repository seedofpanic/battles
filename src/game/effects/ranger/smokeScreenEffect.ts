import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class SmokeScreenEffect extends Effect {
    constructor(actor: ICharacter) {
        super('smoke_screen', 'Smoke screen', 3, actor);
    }

    critChanceDefMod(value: number, type: DamageTypes): number {
        return value - 0.05;
    }
}