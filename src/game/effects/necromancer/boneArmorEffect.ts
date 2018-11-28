import {IUnit} from '../../../models/unit';
import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';

export class BoneArmorEffect extends ResistsModEffect {
    effectsArr = [EffectType.BLEED, EffectType.POISON];

    constructor(actor: IUnit) {
        super('bone_armor', {
            [DamageTypes.PIERCING]: 0.7,
            [DamageTypes.CUTTING]: 0.7
        }, 'Bone armor', 3, actor);
    }

    effectResistMod(value: number, effectType: EffectType) {
        if (this.effectsArr.some(type => type === effectType)) {
            return 0;
        }

        return value;
    }
}