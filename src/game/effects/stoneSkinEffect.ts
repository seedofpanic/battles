import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';

export class StoneSkinEffect extends ResistsModEffect {
    constructor() {
        super({
            [DamageTypes.BLUNT]: 0.7,
            [DamageTypes.CUTTING]: 0.7,
            [DamageTypes.PIERCING]: 0.7,
        }, 'Magic shield', 3);
    }
}