import {Effect} from '../effect';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class CheatDeathEffect extends Effect {
    id = 'cheat_death';

    constructor() {
        super('Cheat death', 3);
    }

    beforeDeath(combat: Combat, self: Unit): boolean {
        if (Math.random() > 0.5) {
            self.increaseHp(this, self.character.healthMax);

            return false;
        }

        return true;
    }
}