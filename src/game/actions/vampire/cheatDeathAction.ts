import {Action} from '../../action';
import {CheatDeathEffect} from '../../effects/cheatDeathEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export const CHEAT_DEATH_ACTION_ID = 'cheat_death';

export class CheatDeathAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Cheat death');
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        self.addEffect(this, new CheatDeathEffect(self));

        delete self.character.actions[CHEAT_DEATH_ACTION_ID];
    }
}