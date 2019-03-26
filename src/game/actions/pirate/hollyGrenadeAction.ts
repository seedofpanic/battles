import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {HollyWoundsEffect} from '../../effects/pirate/hollyWoundsEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class HollyGrenadeAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Holly grenade', 3, 6, DamageTypes.PIERCING, 0, 1, 3);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);

        target.addEffect(this, new HollyWoundsEffect(this.actor));
    }
}