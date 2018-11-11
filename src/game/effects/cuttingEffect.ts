import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

const NAME = 'Bleeding';

export const CUTTING_RFFECT_ID = 'cutting';

export class CuttingEffect extends DotEffect {
    constructor(minDamage: number,
                maxDamage: number,
                type: DamageTypes,
                roundsCount: number,
                source: Unit,
    ) {
        super(CUTTING_RFFECT_ID, NAME, minDamage, maxDamage, type, roundsCount, source);
    }
}