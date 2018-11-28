import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';

export class RemoveEffectsAction extends Action {
    constructor(actor: IUnit, name: string) {
        super(actor, name, 4, 2);
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
        self.character.effects.length = 0;
        super.perform(combat);
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage * 0.25;
    }
}