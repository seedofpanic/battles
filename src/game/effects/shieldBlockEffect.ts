import {ResistsModEffect} from './resistsModEffect';
import {Unit} from '../unit';

export const SHIELD_BLOCK_EFFECT_ID = 'shield_block';

export class ShieldBlockEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super(SHIELD_BLOCK_EFFECT_ID, 0.5, 'Shield block', 1, actor);
    }
}