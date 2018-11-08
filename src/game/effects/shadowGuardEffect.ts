import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';

export class ShadowGuardEffect extends ResistsModEffect {
    id = 'shadow_guard';

    constructor() {
        super({
            [DamageTypes.CUTTING]: 0.6,
            [DamageTypes.BLUNT]: 0.6
        }, 'Shadow guard', 2);
    }
}