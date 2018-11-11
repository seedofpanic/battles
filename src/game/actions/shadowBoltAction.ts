import {HitAction} from './hitAction';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

const NAME = 'Shadow bolt';
const MIN_DAMAGE = 20;
const MAX_DAMAGE = 30;
const CRIT_CHANCE = 0;
const CRIT_MULTIPLIER = 1;
const COOLDOWN = 6;
const CHARGES = 1;

export class ShadowBoltAction extends HitAction {
    constructor(source: Unit) {
        super(source, NAME, MIN_DAMAGE, MAX_DAMAGE, DamageTypes.SHADOW,
            CRIT_CHANCE, CRIT_MULTIPLIER, COOLDOWN, CHARGES);

        this.charges = 0;
    }
}