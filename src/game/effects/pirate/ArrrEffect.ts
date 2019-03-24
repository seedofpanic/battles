import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export class ArrrEffect extends Effect {
    constructor(actor: ICharacter) {
        super('arrr', 'Arrr', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (effect.type[EffectType.STUN]) {
            return 0;
        }

        return value;
    }
}