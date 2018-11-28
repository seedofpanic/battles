import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export class ArrrEffect extends Effect {
    constructor(actor: IUnit) {
        super('arrr', 'Arrr', 3, actor);
    }

    effectResistMod(value: number, effectType: EffectType) {
        if (effectType === EffectType.STUN) {
            return 0;
        }
    }
}