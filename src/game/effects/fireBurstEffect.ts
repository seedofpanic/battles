import {DamageModEffect} from './damageModEffect';
import {DamageTypes} from '../models/damageTypes';

export class FireBurstEffect extends DamageModEffect {
    constructor() {
        super('Fire burst', 3, {
            [DamageTypes.FIRE]: 1.2
        });
    }
}