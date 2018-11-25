import {Unit} from '../../unit';
import {Action} from '../../action';
import {Combat} from '../../combat';

export class SelfAidAction extends Action {
    constructor(actor: Unit) {
        super(actor, 'Self aid', 6);
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        self.increaseHp(this, self.character.healthMax * 0.2);
    }
}