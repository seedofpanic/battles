import {Effect} from '../../effect';
import {Unit} from '../../unit';

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