import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';

export const SHADOW_GUARD_EFFECT_ID =  'shadow_guard';

export class ShadowGuardEffect extends ResistsModEffect {
    constructor(source: Unit) {
        super(SHADOW_GUARD_EFFECT_ID, {
            [DamageTypes.CUTTING]: 0.6,
            [DamageTypes.BLUNT]: 0.6
        }, 'Shadow guard', 2, source);
    }
}