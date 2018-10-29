import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';

const NAME = 'Bleeding';

export class CuttingEffect extends DotEffect {
    id = 'bleeding';

    constructor(minDamage: number,
                maxDamage: number,
                type: DamageTypes,
                roundsCount: number,) {
        super(NAME, minDamage, maxDamage, type, roundsCount);
    }
}