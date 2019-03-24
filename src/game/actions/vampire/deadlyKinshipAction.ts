import {Action} from '../../action';
import {DeadlyKinshipEffect} from '../../effects/deadlyKinshipEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class DeadlyKinshipAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Deadly kinship', 4);
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        target.addEffect(this, new DeadlyKinshipEffect(self));
    }
}