import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {PoisonBiteEffect} from '../../effects/draconite/poisonBiteEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class PoisonBiteAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Poison bite', 1, 2, DamageTypes.CUTTING);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        target.addEffect(this, new PoisonBiteEffect(self));

        super.perform(combat, self, target);
    }
}