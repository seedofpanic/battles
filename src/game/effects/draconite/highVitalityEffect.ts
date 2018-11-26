import {Effect} from '../../effect';
import {Unit} from '../../unit';
import {BLOOD_RAGE_EFFECT_ID} from '../bloodRageEffect';
import {POISON_BITE_EFFECT} from './poisonBiteEffect';
import {STUN_EFFECT_ID} from '../stunEffect';
import {EffectType} from '../../models/effectType';

export const HIGH_VITALITY_EFFECT_ID = 'high_vitality';

export class HighVitalityEffect extends Effect {
    resitstsIds = [EffectType.BLEED, EffectType.POISON, EffectType.STUN];

    constructor(actor: Unit) {
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