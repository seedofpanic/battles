import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';

export class GreatArmorEffect extends ResistsModEffect {
    constructor() {
        super({
            [DamageTypes.DEATH]: 0.5,
            [DamageTypes.HOLY]: 0.5,
        }, 'Great armor', 2);
    }
}