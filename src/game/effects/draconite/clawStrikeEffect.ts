import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export const CLAW_STRIKE_EFFECT = 'claw_strike';

export class ClawStrikeEffect extends DotEffect {
    type = EffectType.BLEED;

    constructor(actor: IUnit) {
        super(CLAW_STRIKE_EFFECT, 'Claw strike', 1, 2, DamageTypes.CUTTING, 3, actor);
    }
}