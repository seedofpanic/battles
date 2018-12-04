import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';

export class PrayEffect extends Effect {
    effectsArr = [EffectType.STUN, EffectType.POISON, EffectType.BLEED];

    constructor(actor: IUnit) {
        super('pray', 'Pray', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (this.effectsArr.some(type => effect.type[type])) {
            return 0;
        }

        return value;
    }
}