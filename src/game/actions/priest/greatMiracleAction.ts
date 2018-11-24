import {Action} from '../../action';
import {Unit} from '../../unit';
import {Combat} from '../../combat';

export class GreatMiracleAction extends Action {
    constructor(source: Unit) {
        super(source, 'Great miracle');
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        self.increaseHp(this, self.character.healthMax * 0.1);
    }
}