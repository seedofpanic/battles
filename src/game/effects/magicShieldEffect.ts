import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';

export class MagicShieldEffect extends ResistsModEffect {
    constructor() {
        super({
            [DamageTypes.DEATH]: 0.8,
            [DamageTypes.HOLY]: 0.8,
            [DamageTypes.FIRE]: 0.8,
        }, 'Magic shield', 3);
    }
}