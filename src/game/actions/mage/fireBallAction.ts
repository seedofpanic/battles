import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

const NAME = 'Fireball';
const MIN_DAMAGE = 3;
const MAX_DAMAGE = 6;
const CRIT_CHANCE = 0.12;
const CRIT_MULTIPLIER = 1.3;

export class FireBallAction extends HitAction {
    constructor(actor: IUnit) {
        super(
            actor,
            NAME,
            MIN_DAMAGE,
            MAX_DAMAGE,
            DamageTypes.FIRE,
            CRIT_CHANCE,
            CRIT_MULTIPLIER
        );
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);
    }
}