import {ResistsModEffect} from './resistsModEffect';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const SHIELD_BLOCK_EFFECT_ID = 'shield_block';

export class ShieldBlockEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super(SHIELD_BLOCK_EFFECT_ID, 0.5, 'Shield block', 1, actor);
    }
}