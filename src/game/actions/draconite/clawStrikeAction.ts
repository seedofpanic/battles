import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {ClawStrikeEffect} from '../../effects/draconite/clawStrikeEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class ClawStrikeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Claw strike', 4, 7, DamageTypes.CUTTING, 0.15, 1.4, 4);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        target.addEffect(this, new ClawStrikeEffect(self));

        super.perform(combat, self, target);
    }
}