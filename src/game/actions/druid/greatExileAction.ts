import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class GreatExileAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Great exile', 5);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        if (!target.isValuable) {
            target.decreaseHp(this, target.health, DamageTypes.DEATH);
        }
    }
}