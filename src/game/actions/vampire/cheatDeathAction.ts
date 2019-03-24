import {Action} from '../../action';
import {CheatDeathEffect} from '../../effects/cheatDeathEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export const CHEAT_DEATH_ACTION_ID = 'cheat_death';

export class CheatDeathAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Cheat death');
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        self.addEffect(this, new CheatDeathEffect(self));

        delete self.actions[CHEAT_DEATH_ACTION_ID];
    }
}