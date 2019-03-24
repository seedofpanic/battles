import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class InfernoAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Inferno', 20, 20, DamageTypes.FIRE);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        const resist = self.getResist(DamageTypes.FIRE, this);

        self.decreaseHp(this, 10 * resist, DamageTypes.FIRE);

        super.perform(combat, self, target);
    }
}