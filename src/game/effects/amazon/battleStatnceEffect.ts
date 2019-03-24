import {IUnit} from '../../../models/unit';
import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class BattleStatnceEffect extends Effect {
    constructor(actor: ICharacter) {
        super('battle_statnce', 'Battle statnce', 3, actor);
    }

    damageMod(value: number, type: DamageTypes, self: ICharacter, target: ICharacter): number {
        return value + 4;
    }
}