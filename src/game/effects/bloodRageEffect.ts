import {DamageModEffect} from './damageModEffect';
import {Unit} from '../unit';
import {DamageTypes} from '../models/damageTypes';

export const BLOOD_RAGE_EFFECT_ID = 'blood_rage';

export class BloodRageEffect extends DamageModEffect {
    constructor(source: Unit) {
        super(BLOOD_RAGE_EFFECT_ID, 'Blood rage', 3, 1.3, source);
    }

    preTick(self: Unit) {
        self.decreaseHp(this, 1, DamageTypes.DEATH);
    }
}