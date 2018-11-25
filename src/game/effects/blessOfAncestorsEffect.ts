import {ResistsModEffect} from './resistsModEffect';
import {Unit} from '../unit';

export const BLESS_OF_ANCESTORS_EFFECT_ID = 'bless_of_ancestors';

export class BlessOfAncestorsEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super(BLESS_OF_ANCESTORS_EFFECT_ID, 1.1, 'Bless', 3, actor);
    }
}