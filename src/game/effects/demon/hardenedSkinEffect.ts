import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';

export class HardenedSkinEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('hardened_skin', {
            [DamageTypes.PIERCING]: 0.8,
            [DamageTypes.BLUNT]: 0.8,
            [DamageTypes.CUTTING]: 0.8,
        }, 'Hardened skin', 3, actor);
    }
}