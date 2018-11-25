import {ResistsModEffect} from '../resistsModEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class HellsistanceEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super('hellsistance', {
            [DamageTypes.CUTTING]: 0.7,
            [DamageTypes.POISON]: 0.7,
            [DamageTypes.HOLY]: 0.7,
            [DamageTypes.DEATH]: 0.7,
        }, 'Hellsistance', 2, actor);
    }
}