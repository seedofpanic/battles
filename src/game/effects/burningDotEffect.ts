import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';

const NAME = 'Burning';

export const BURNING_DOT_EFFECT_ID = 'burning';

export class BurningDotEffect extends DotEffect {
    constructor(minDamage: number,
                maxDamage: number,
                roundsCount: number,
                actor: IUnit,
    ) {
        super(BURNING_DOT_EFFECT_ID, NAME, minDamage, maxDamage, DamageTypes.FIRE, roundsCount, actor);
    }
}