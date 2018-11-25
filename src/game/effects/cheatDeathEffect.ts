import {Effect} from '../effect';
import {Combat} from '../combat';
import {Unit} from '../unit';

export const CHEAT_DEATH_EFFECT_ID = 'cheat_death';

export class CheatDeathEffect extends Effect {
    constructor(actor: Unit) {
        super(CHEAT_DEATH_EFFECT_ID, 'Cheat death', 3, actor);
    }

    beforeDeath(combat: Combat, self: Unit): boolean {
        if (Math.random() > 0.5) {
            self.increaseHp(this, self.character.healthMax);

            return false;
        }

        return true;
    }
}