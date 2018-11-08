import {ResistsModEffect} from './resistsModEffect';

export class BlessOfAncestorsEffect extends ResistsModEffect {
    constructor() {
        super(1.1, 'Bless', 3);
    }
}