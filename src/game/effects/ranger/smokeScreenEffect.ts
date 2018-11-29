import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class SmokeScreenEffect extends Effect {
    constructor(actor: IUnit) {
        super('smoke_screen', 'Smoke screen', 3, actor);
    }

    critChanceDefMod(value: number, type: DamageTypes): number {
        return value - 0.05;
    }
}