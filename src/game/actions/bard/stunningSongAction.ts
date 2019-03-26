import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';
import {ICharacter} from '../../../models/character';

export class StunningSongAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Stunning song', 6);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
       super.perform(combat, self, target);

       target.addEffect(this, new StunEffect(2, this.actor));
    }
}