import {ResistsModEffect} from '../resistsModEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class HardenedSkinEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super('hardened_skin', {
            [DamageTypes.PIERCING]: 0.8,
            [DamageTypes.BLUNT]: 0.8,
            [DamageTypes.CUTTING]: 0.8,
        }, 'Hardened skin', 3, actor);
    }
}