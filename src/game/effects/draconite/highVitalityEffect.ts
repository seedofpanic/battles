import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export const HIGH_VITALITY_EFFECT_ID = 'high_vitality';

export class HighVitalityEffect extends Effect {
    resitstsIds = [EffectType.BLEED, EffectType.POISON, EffectType.STUN];

    constructor(actor: IUnit) {
        super(HIGH_VITALITY_EFFECT_ID, 'High vitality', 3, actor);
    }

    effectResistMod(value: number, effectType: EffectType) {
        if (this.resitstsIds.some(resistId => resistId === effectType)) {
            return 0;
        } else {
            return value;
        }
    }
}