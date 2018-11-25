import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export const CLAW_STRIKE_EFFECT = 'claw_strike';

export class ClawStrikeEffect extends DotEffect {
    type = EffectType.BLEED;

    constructor(actor: Unit) {
        super(CLAW_STRIKE_EFFECT, 'Claw strike', 1, 2, DamageTypes.CUTTING, 3, actor);
    }
}