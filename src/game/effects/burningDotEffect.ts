import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

const NAME = 'Burning';

export const BURNING_DOT_EFFECT_ID = 'burning';

export class BurningDotEffect extends DotEffect {
    constructor(minDamage: number,
                maxDamage: number,
                roundsCount: number,
                source: Unit,
    ) {
        super(BURNING_DOT_EFFECT_ID, NAME, minDamage, maxDamage, DamageTypes.FIRE, roundsCount, source);
    }
}