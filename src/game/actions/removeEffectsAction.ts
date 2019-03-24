import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

export class RemoveEffectsAction extends Action {
    constructor(actor: ICharacter, name: string) {
        super(actor, name, 4, 2);
    }

    perform(combat: ICombat, self?: ICharacter, target?: ICharacter) {
        self.effects.length = 0;
        super.perform(combat);
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage * 0.25;
    }
}