import {IUnit} from '../../../models/unit';
import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IEffect} from '../../../models/effect';

export class BoneArmorEffect extends ResistsModEffect {
    effectsArr = [EffectType.BLEED, EffectType.POISON];

    constructor(actor: IUnit) {
        super('bone_armor', {
            [DamageTypes.PIERCING]: 0.7,
            [DamageTypes.CUTTING]: 0.7
        }, 'Bone armor', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (this.effectsArr.some(type => effect.type[type])) {
            return 0;
        }

        return value;
    }
}