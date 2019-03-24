import {ResistsModEffect} from './resistsModEffect';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const BLESS_OF_ANCESTORS_EFFECT_ID = 'bless_of_ancestors';

export class BlessOfAncestorsEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super(BLESS_OF_ANCESTORS_EFFECT_ID, 0.5, 'Bless', 3, actor);
    }
}