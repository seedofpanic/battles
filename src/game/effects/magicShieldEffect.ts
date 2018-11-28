import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';

export const MAGIC_SHIELD_EFFECT_ID = 'magic_shield';

export class MagicShieldEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super(MAGIC_SHIELD_EFFECT_ID, {
            [DamageTypes.DEATH]: 0.8,
            [DamageTypes.HOLY]: 0.8,
            [DamageTypes.FIRE]: 0.8,
        }, 'Magic shield', 3, actor);
    }
}