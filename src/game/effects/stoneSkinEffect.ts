import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';

export const STONE_SKIN_EFFECT_ID = 'stone_skin';

export class StoneSkinEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super(STONE_SKIN_EFFECT_ID, {
            [DamageTypes.BLUNT]: 0.7,
            [DamageTypes.CUTTING]: 0.7,
            [DamageTypes.PIERCING]: 0.7,
        }, 'Magic shield', 3, actor);
    }
}