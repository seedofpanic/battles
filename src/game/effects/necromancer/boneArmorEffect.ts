import {IUnit} from '../../../models/unit';
import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export class BoneArmorEffect extends ResistsModEffect {
    effectsArr = [EffectType.BLEED, EffectType.POISON];

    constructor(actor: ICharacter) {
        super('bone_armor', {
            [DamageTypes.PIERCING]: 0.35,
            [DamageTypes.CUTTING]: 0.35
        }, 'Bone armor', 3, actor);
    }

    effectResistMod(value: number, effect: IEffect) {
        if (this.effectsArr.some(type => effect.type[type])) {
            return 0;
        }

        return value;
    }
}