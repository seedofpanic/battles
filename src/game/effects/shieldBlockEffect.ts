import {ResistsModEffect} from './resistsModEffect';

export class ShieldBlockEffect extends ResistsModEffect {
    constructor() {
        super(0.5, 'Shield block', 1);
    }
}