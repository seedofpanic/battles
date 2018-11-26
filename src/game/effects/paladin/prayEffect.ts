import {Unit} from '../../unit';
import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';

export class PrayEffect extends Effect {
    effectsArr = [EffectType.STUN, EffectType.POISON, EffectType.BLEED];

    constructor(actor: Unit) {
        super('pray', 'Pray', 3, actor);
    }

    effectResistMod(value: number, effectType: EffectType) {
        if (this.effectsArr.some(type => type === effectType)) {
            return 0;
        }

        return value;
    }
}