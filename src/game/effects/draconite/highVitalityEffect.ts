import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export const HIGH_VITALITY_EFFECT_ID = 'high_vitality';

export class HighVitalityEffect extends Effect {
    resitstsIds = [EffectType.BLEED, EffectType.POISON, EffectType.STUN];

    constructor(actor: ICharacter) {
        super(HIGH_VITALITY_EFFECT_ID, 'High vitality', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (this.resitstsIds.some(resistId => effect.type[resistId])) {
            return 0;
        } else {
            return value;
        }
    }
}