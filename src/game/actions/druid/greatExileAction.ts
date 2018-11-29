import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {DamageTypes} from '../../models/damageTypes';

export class GreatExileAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Great exile', 5);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        if (!target.isValuable) {
            target.decreaseHp(this, target.character.health, DamageTypes.DEATH);
        }
    }
}