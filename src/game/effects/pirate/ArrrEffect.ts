import {Effect} from '../../effect';
import {Unit} from '../../unit';

export class ArrrEffect extends Effect {
    constructor(source: Unit) {
        super('arrr', 'Arrr', 3, source);
    }

    effectResistMod(value: number, effectId: string) {
        if (effectId === 'stun') {
            return 0;
        }
    }
}