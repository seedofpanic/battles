import {DamageTypes} from '../models/damageTypes';
import {HitAction} from './hitAction';
import {CuttingEffect} from '../effects/cuttingEffect';
import {Combat} from '../combat';
import {Unit} from '../unit';

const NAME = 'Bleeding wound';
const MIN_DAMAGE = 5;
const MAX_DAMAGE = 9;
const CRIT_CHANCE = 0.1;
const CRIT_MULTIPLIER = 1;
const COOLDOWN = 1;
const MAX_CHARGES = 1;

const CUTTING_EFFECT_MIN_DAMAGE = 1.66;
const CUTTING_EFFECT_MAX_DAMAGE = 1.66;
const CUTTING_EFFECT_ROUNDS_COUNT = 3;

export class SwordCuttingAction extends HitAction {
    constructor() {
        super(NAME, MIN_DAMAGE, MAX_DAMAGE, DamageTypes.CUTTING, CRIT_CHANCE, CRIT_MULTIPLIER, COOLDOWN, MAX_CHARGES);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        target.addEffect(this, new CuttingEffect(
            CUTTING_EFFECT_MIN_DAMAGE,
            CUTTING_EFFECT_MAX_DAMAGE,
            DamageTypes.CUTTING,
            CUTTING_EFFECT_ROUNDS_COUNT
        ));
    }
}