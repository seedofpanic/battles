import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class SelfAidAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Self aid', 6);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        self.increaseHp(this, self.healthMax * 0.2);
    }
}