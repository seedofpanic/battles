import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

const NAME = 'Fire beam';
const MIN_DAMAGE = 4;
const MAX_DAMAGE = 7;
const CRIT_CHANCE = 0.15;
const CRIT_MULTIPLIER = 1.4;

export class FireBeamAction extends HitAction {
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
}