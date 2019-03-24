import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export class BlessOfNatureEffect extends Effect {
    resistsArr = [EffectType.POISON, EffectType.BLEED, EffectType.STUN];

    constructor(actor: ICharacter) {
        super('bless_of_nature', 'Bless of nature', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (this.resistsArr.some(resist => effect.type[resist])) {
            return 0;
        }

        return value;
    }
}