import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';

export const GREAT_ARMOR_EFFECT_ID = 'great_armor';

export class GreatArmorEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super(GREAT_ARMOR_EFFECT_ID, {
            [DamageTypes.DEATH]: 0.5,
            [DamageTypes.HOLY]: 0.5,
        }, 'Great armor', 2, actor);
    }
}