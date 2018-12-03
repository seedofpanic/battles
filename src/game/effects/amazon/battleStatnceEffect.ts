import {IUnit} from '../../../models/unit';
import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';

export class BattleStatnceEffect extends Effect {
    constructor(actor: IUnit) {
        super('battle_statnce', 'Battle statnce', 3, actor);
    }

    damageMod(value: number, type: DamageTypes, self: IUnit, target: IUnit): number {
        return value + 4;
    }
}