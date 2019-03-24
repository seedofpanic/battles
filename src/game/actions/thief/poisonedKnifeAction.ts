import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {PoisonedKnifeEffect} from '../../effects/thief/poisonedKnifeEffect';
import {ICharacter} from '../../../models/character';

export class PoisonedKnifeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Poisoned knife', 3, 5, DamageTypes.PIERCING, 0.15, 1.2, 6);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);
        target.addEffect(this, new PoisonedKnifeEffect(this.actor));
    }
}