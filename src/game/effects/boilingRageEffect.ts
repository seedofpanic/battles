import {DamageModEffect} from './damageModEffect';
import {Unit} from '../unit';

export const BOILING_RAGE_EFFECT_ID = 'boiling_rage';

export class BoilingRageEffect extends DamageModEffect {
    constructor(actor: Unit) {
        super(BOILING_RAGE_EFFECT_ID, 'Boiling rage', 2, 1.2, actor);
    }
}