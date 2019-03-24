import {IUnit} from '../../../models/unit';
import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {StunEffect} from '../../effects/stunEffect';
import {ICharacter} from '../../../models/character';

export class HandmadeBombAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Handmade bomb', 4, 7, DamageTypes.PIERCING, 0.15, 1.5, 4);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);
        target.addEffect(this, new StunEffect(1, this.actor));
    }
}