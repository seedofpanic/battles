import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {BladesWhirlwindEffect} from '../../effects/amazon/bladesWhirlwindEffect';
import {ICharacter} from '../../../models/character';

export class BladesWhirlwindAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Blades whirlwind', 3, 5, DamageTypes.CUTTING, 0.1, 1.3, 4);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.perform(combat, self, target);

        target.addEffect(this, new BladesWhirlwindEffect(this.actor));
    }
}