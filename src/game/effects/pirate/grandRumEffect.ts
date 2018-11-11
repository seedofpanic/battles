import {ResistsModEffect} from '../resistsModEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class GrandRumEffect extends ResistsModEffect {
    constructor(source: Unit) {
        super('grand_rum', {
            [DamageTypes.FIRE]: 0.7,
            [DamageTypes.DEATH]: 0.7,
            [DamageTypes.HOLY]: 0.7,
        }, 'Grand rum', 3, source);
    }
}