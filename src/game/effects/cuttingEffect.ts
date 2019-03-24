import {DotEffect} from './dotEffect';
import {DamageTypes} from '../models/damageTypes';
import {EffectType} from '../models/effectType';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

const NAME = 'Bleeding';

export const CUTTING_RFFECT_ID = 'cutting';

export class CuttingEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.BLEED]: true
    };

    constructor(minDamage: number,
                maxDamage: number,
                type: DamageTypes,
                roundsCount: number,
                actor: ICharacter,
    ) {
        super(CUTTING_RFFECT_ID, NAME, minDamage, maxDamage, type, roundsCount, actor);
    }
}