import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {EffectType} from '../models/effectType';
import {IUnit} from '../../models/unit';
import {IEffect} from '../../models/effect';

export const BLOOD_ARMOR_EFFECT_ID = 'blood_armor';

export class BloodArmorEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super(BLOOD_ARMOR_EFFECT_ID, {
            [DamageTypes.HOLY]: 0.8,
            [DamageTypes.DEATH]: 0.8
        }, 'Blood armor', 2, actor);
    }

    effectResistMod(value: number, effect: IEffect): number {
        if (effect.type[EffectType.STUN]) {
            return 0;
        }

        return value;
    }
}