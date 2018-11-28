import {Effect} from '../effect';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';

export const CHEAT_DEATH_EFFECT_ID = 'cheat_death';

export class CheatDeathEffect extends Effect {
    constructor(actor: IUnit) {
        super(CHEAT_DEATH_EFFECT_ID, 'Cheat death', 3, actor);
    }

    beforeDeath(combat: ICombat, self: IUnit): boolean {
        if (Math.random() > 0.5) {
            self.increaseHp(this, self.character.healthMax);

            return false;
        }

        return true;
    }
}