import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

const NAME = 'Burning';

export const BURNING_DOT_EFFECT_ID = 'burning';

export class BurningDotEffect extends DotEffect {
    constructor(minDamage: number,
                maxDamage: number,
                roundsCount: number,
                actor: ICharacter,
    ) {
        super(BURNING_DOT_EFFECT_ID, NAME, minDamage, maxDamage, DamageTypes.FIRE, roundsCount, actor);
    }
}