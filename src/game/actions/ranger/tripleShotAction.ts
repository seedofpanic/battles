import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';

export class TripleShotAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, 'Triple shot', 3, 5, DamageTypes.PIERCING, 0.05, 1.2, 6);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        for (let i = 0; i < 2; i++) {
            if (Math.random() < 0.75) {
                super.perform(combat, self, target);
            }
        }
    }
}