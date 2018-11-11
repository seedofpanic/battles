import {HitAction} from '../hitAction';
import {BurningDotEffect} from '../../effects/burningDotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

const NAME = 'Fireball';
const MIN_DAMAGE = 3;
const MAX_DAMAGE = 6;
const CRIT_CHANCE = 0.12;
const CRIT_MULTIPLIER = 1.3;

export class FireBallAction extends HitAction {
    constructor(source: Unit,) {
        super(
            source,
            NAME,
            MIN_DAMAGE,
            MAX_DAMAGE,
            DamageTypes.FIRE,
            CRIT_CHANCE,
            CRIT_MULTIPLIER
        );
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);
    }
}