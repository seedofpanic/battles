import {DamageModEffect} from './damageModEffect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export const FIRE_BURST_EFFECT = 'fire_burst';

export class FireBurstEffect extends DamageModEffect {
    constructor(source: Unit) {
        super(FIRE_BURST_EFFECT, 'Fire burst', 3, {
            [DamageTypes.FIRE]: 1.2
        }, source);
    }
}