import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class GreatExileAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Great exile', 5);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        target.kill();
    }
}