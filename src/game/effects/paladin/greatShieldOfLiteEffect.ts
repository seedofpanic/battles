import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';

export class GreatShieldOfLiteEffect extends ResistsModEffect {
    effectsArr = [EffectType.POISON, EffectType.BLEED];

    constructor(actor: IUnit) {
        super('great_shield_of_lite', {
            [DamageTypes.HOLY]: 0.5,
            [DamageTypes.DEATH]: 0.5
        }, 'Great shield of lite', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (this.effectsArr.some(type => effect.type[type])) {
            return 0;
        }

        return value;
    }
}