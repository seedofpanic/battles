import {Effect} from '../../effect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class CritMasteryEffect extends Effect {
    constructor(source: Unit) {
        super('crit_mastery', 'Crit mastery', 3, source);
    }

    critMod(value: number, type: DamageTypes): number {
        return value * 2;
    }
}
