import {HitAction} from './hitAction';
import {BurningDotEffect} from '../effects/burningDotEffect';
import {DamageTypes} from '../models/damageTypes';
import {Combat} from '../combat';
import {Unit} from '../unit';

const NAME = 'Fire ball';
const MIN_DAMAGE = 5;
const MAX_DAMAGE = 7;
const CRIT_CHANCE = 0.3;
const CRIT_MULTIPLIER = 3;

export class FireBallAction extends HitAction {
    constructor() {
        super(
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
        target.addEffect(this, new BurningDotEffect(2, 3, 3));
    }
}