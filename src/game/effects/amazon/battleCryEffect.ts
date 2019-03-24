import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class BattleCryEffect extends Effect {
    constructor(actor: ICharacter) {
        super('battle_cry', 'Battle cry', 3, actor);
    }

    critChanceMod(value: number, type: DamageTypes): number {
        return value + 0.1;
    }
}