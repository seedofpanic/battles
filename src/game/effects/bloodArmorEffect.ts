import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';

export class BloodArmorEffect extends ResistsModEffect {
    constructor() {
        super({
            [DamageTypes.HOLY]: 0.8,
            [DamageTypes.DEATH]: 0.8
        }, 'Blood armor', 2);
    }

    effectResistMod(value: number, effectId: string) {
        return 0;
    }
}