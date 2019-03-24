import {DamageModEffect} from './damageModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const BLOOD_RAGE_EFFECT_ID = 'blood_rage';

export class BloodRageEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super(BLOOD_RAGE_EFFECT_ID, 'Blood rage', 3, 1.3, actor);
    }

    preTick(self: ICharacter) {
        self.decreaseHp(this, 1, DamageTypes.DEATH);
    }
}