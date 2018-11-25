import {HitAction} from './hitAction';
import {BurningDotEffect} from '../effects/burningDotEffect';
import {DamageTypes} from '../models/damageTypes';
import {Combat} from '../combat';
import {Unit} from '../unit';

const NAME = 'Frost arrow';
const MIN_DAMAGE = 3;
const MAX_DAMAGE = 9;
const CRIT_CHANCE = 0.1;
const CRIT_MULTIPLIER = 1.5;

export class FrostArrowAction extends HitAction {
    private mod = 1;

    constructor(actor: Unit,) {
        super(
            actor,
            NAME,
            MIN_DAMAGE,
            MAX_DAMAGE,
            DamageTypes.FROST,
            CRIT_CHANCE,
            CRIT_MULTIPLIER
        );
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        const oldEffects = target.character.effects;

        target.character.effects = oldEffects.filter(effect => !(effect instanceof BurningDotEffect));

        this.mod = oldEffects.length - target.character.effects.length;

        super.perform(combat, self, target);
    }

    protected calcDamage(unit: Unit): number {
        const modifier = 1 + this.mod * 3;

        return super.calcDamage(unit) * modifier;
    }
}