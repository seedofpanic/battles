import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class SimpleTrickEffect extends Effect {
    constructor(actor: IUnit) {
        super('simple_trick', 'Simple trick', 3, actor);
    }

    critChanceDefMod(value: number, type: DamageTypes): number {
        return 0;
    }
}