import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class HellsistanceEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('hellsistance', {
            [DamageTypes.CUTTING]: 0.7,
            [DamageTypes.POISON]: 0.7,
            [DamageTypes.HOLY]: 0.7,
            [DamageTypes.DEATH]: 0.7,
        }, 'Hellsistance', 2, actor);
    }
}