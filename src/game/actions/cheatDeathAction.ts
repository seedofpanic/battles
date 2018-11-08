import {Action} from '../action';
import {Combat} from '../combat';
import {Unit} from '../unit';
import {CheatDeathEffect} from '../effects/cheatDeathEffect';

export const CHEAT_DEATH_ACTION_ID = 'cheat_death';

export class CheatDeathAction extends Action {
    constructor() {
        super('Cheat death');
    }

    beforeResolve(combat: Combat, self: Unit, target: Unit) {
        self.addEffect(this, new CheatDeathEffect());

        delete self.character.actions[CHEAT_DEATH_ACTION_ID];
    }
}