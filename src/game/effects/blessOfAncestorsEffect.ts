import {ResistsModEffect} from './resistsModEffect';
import {IUnit} from '../../models/unit';

export const BLESS_OF_ANCESTORS_EFFECT_ID = 'bless_of_ancestors';

export class BlessOfAncestorsEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super(BLESS_OF_ANCESTORS_EFFECT_ID, 1.1, 'Bless', 3, actor);
    }
}