import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class SelfAidAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Self aid', 6);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        self.increaseHp(this, self.character.healthMax * 0.2);
    }
}