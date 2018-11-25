import {HitAction} from '../hitAction';
import {BurningDotEffect} from '../../effects/burningDotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

const NAME = 'Fireball';
const MIN_DAMAGE = 4;
const MAX_DAMAGE = 7;
const CRIT_CHANCE = 0.15;
const CRIT_MULTIPLIER = 1.4;

export class FireBeamAction extends HitAction {
    constructor(actor: Unit) {
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

    perform(combat: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);
    }
}