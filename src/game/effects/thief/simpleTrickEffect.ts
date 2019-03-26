import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class SimpleTrickEffect extends Effect {
    constructor(actor: ICharacter) {
        super('simple_trick', 'Simple trick', 3, actor);
    }

    critChanceDefMod(value: number, type: DamageTypes): number {
        return 0;
    }
}