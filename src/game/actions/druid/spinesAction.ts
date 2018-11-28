import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {SpinesEffect} from '../../effects/druid/spinesEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class SpinesAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Spines', 3, 6, DamageTypes.CUTTING, 0, 1, 5);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new SpinesEffect(this.actor));
    }
}