import {Effect} from '../../effect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';

export class BlessOfNatureEffect extends Effect {
    resistsArr = [EffectType.POISON, EffectType.BLEED, EffectType.STUN];

    constructor(actor: IUnit) {
        super('bless_of_nature', 'Bless of nature', 3, actor);
    }

    effectResistMod(value: number, effectType: EffectType) {
        if (this.resistsArr.some(resist => resist === effectType)) {
            return 0;
        }

        return value;
    }
}