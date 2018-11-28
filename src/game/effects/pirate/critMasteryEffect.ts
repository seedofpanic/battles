import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class CritMasteryEffect extends Effect {
    constructor(actor: IUnit) {
        super('crit_mastery', 'Crit mastery', 3, actor);
    }

    critMod(value: number, type: DamageTypes): number {
        return value * 2;
    }
}
