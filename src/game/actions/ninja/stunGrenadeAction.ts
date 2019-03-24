import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {StunEffect} from '../../effects/stunEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class StunGrenadeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Stun grenade', 2, 5, DamageTypes.PIERCING, 0.1, 1.2, 4);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);

        target.addEffect(this, new StunEffect(1, this.actor));
    }
}