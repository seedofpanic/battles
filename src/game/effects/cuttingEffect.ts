import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {EffectType} from '../models/effectType';

const NAME = 'Bleeding';

export const CUTTING_RFFECT_ID = 'cutting';

export class CuttingEffect extends DotEffect {
    type = EffectType.BLEED;

    constructor(minDamage: number,
                maxDamage: number,
                type: DamageTypes,
                roundsCount: number,
                actor: Unit,
    ) {
        super(CUTTING_RFFECT_ID, NAME, minDamage, maxDamage, type, roundsCount, actor);
    }
}