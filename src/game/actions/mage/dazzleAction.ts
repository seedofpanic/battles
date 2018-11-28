import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {StunEffect} from '../../effects/stunEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

const NAME = 'Shield strike';
const MIN_DAMAGE = 3;
const MAX_DAMAGE = 9;
const CRIT_CHANCE = 0;
const CRIT_MULTIPLIER = 1;
const COOLDOWN = 2;

export class DazzleAction extends HitAction {
    constructor(actor: IUnit,) {
        super(
            actor,
            NAME,
            MIN_DAMAGE,
            MAX_DAMAGE,
            DamageTypes.BLUNT,
            CRIT_CHANCE,
            CRIT_MULTIPLIER,
            COOLDOWN
        );
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        if (Math.random() > 0.6) {
            target.addEffect(this, new StunEffect(1, self));
        }
    }
}