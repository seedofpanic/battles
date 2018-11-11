import {Effect} from '../../effect';
import {Unit} from '../../unit';
import {BLOOD_RAGE_EFFECT_ID} from '../bloodRageEffect';
import {POISON_BITE_EFFECT} from './poisonBiteEffect';
import {STUN_EFFECT_ID} from '../stunEffect';

export const HIGH_VITALITY_EFFECT_ID = 'high_vitality';

export class HighVitalityEffect extends Effect {
    resitstsIds = [BLOOD_RAGE_EFFECT_ID, POISON_BITE_EFFECT, STUN_EFFECT_ID];

    constructor(source: Unit) {
        super(HIGH_VITALITY_EFFECT_ID, 'High vitality', 3, source);
    }

    effectResistMod(value: number, effectId: string) {
        if (this.resitstsIds.some(resistId => resistId === effectId)) {
            return 0;
        } else {
            return value;
        }
    }
}