import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class BattleCryEffect extends Effect {
    constructor(actor: IUnit) {
        super('battle_cry', 'Battle cry', 3, actor);
    }

    critChanceMod(value: number, type: DamageTypes): number {
        return value + 0.1;
    }
}