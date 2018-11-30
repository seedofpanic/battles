import {IUnit} from '../../../models/unit';
import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';

export class ImprovedCritEffect extends Effect {
    constructor(actor: IUnit) {
        super('improved_crit', 'Improved crit', 3, actor);
    }

    critChanceMod(value: number, type: DamageTypes): number {
        return value + 0.1;
    }

    critMod(value: number, type: DamageTypes): number {
        return value + 1.5;
    }
}