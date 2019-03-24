import {Action} from '../../action';
import {VanishEffect} from '../../effects/ninja/VanishEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class VanishAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Vanish', 6);
    }

    beforeResolve(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.beforeResolve(combat, self, target);

        self.addEffect(this, new VanishEffect(this.actor));
    }
}