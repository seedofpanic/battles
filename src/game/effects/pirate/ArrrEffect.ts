import {Effect} from '../../effect';
import {Unit} from '../../unit';
import {EffectType} from '../../models/effectType';

export class ArrrEffect extends Effect {
    constructor(actor: Unit) {
        super('arrr', 'Arrr', 3, actor);
    }

    effectResistMod(value: number, effectType: EffectType) {
        if (effectType === EffectType.STUN) {
            return 0;
        }
    }
}