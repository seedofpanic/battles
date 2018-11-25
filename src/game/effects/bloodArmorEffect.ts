import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export const BLOOD_ARMOR_EFFECT_ID = 'blood_armor';

export class BloodArmorEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super(BLOOD_ARMOR_EFFECT_ID, {
            [DamageTypes.HOLY]: 0.8,
            [DamageTypes.DEATH]: 0.8
        }, 'Blood armor', 2, actor);
    }

    effectResistMod(value: number, effectType: EffectType): number {
        if (effectType === EffectType.STUN) {
            return 0;
        }

        return value;
    }
}