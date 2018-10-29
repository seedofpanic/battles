import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';

const NAME = 'Burning';

export class BurningDotEffect extends DotEffect {
    id = 'burning';

    constructor(minDamage: number,
                maxDamage: number,
                roundsCount: number) {
        super(NAME, minDamage, maxDamage, DamageTypes.FIRE, roundsCount);
    }
}