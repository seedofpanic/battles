import {Action} from '../../action';
import {ICombat} from '../../../models/combat';
import {IUnit} from '../../../models/unit';
import {StunEffect} from '../../effects/stunEffect';
import {ICharacter} from '../../../models/character';

export class UndergroundRoarAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Underground roar', 8);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(2, this.actor));
    }
}