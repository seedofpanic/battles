import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {PoisonKunaiEffect} from '../../effects/ninja/poisonKunaiEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class PoisonKunaiAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Poison kunai', 3, 5, DamageTypes.PIERCING);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);

        target.addEffect(this, new PoisonKunaiEffect(this.actor));
    }
}