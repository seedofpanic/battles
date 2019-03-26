import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {HideEffect} from '../../effects/ranger/hideEffect';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';
import {ICharacter} from '../../../models/character';

export class HideAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, HideEffect, 'Hide', 6);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        target.addEffect(this, new StunEffect(1, this.actor));

        super.perform(combat, self, target);
    }
}