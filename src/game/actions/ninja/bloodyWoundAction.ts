import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {BloodyWoundEffect} from '../../effects/ninja/bloodyWoundEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class BloodyWoundAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Bloody wound', 3, 5, DamageTypes.PIERCING, 0.15, 1.2);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);

        target.addEffect(this, new BloodyWoundEffect(this.actor));
    }
}