import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const MAGIC_SHIELD_EFFECT_ID = 'magic_shield';

export class MagicShieldEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super(MAGIC_SHIELD_EFFECT_ID, {
            [DamageTypes.DEATH]: 0.4,
            [DamageTypes.HOLY]: 0.4,
            [DamageTypes.FIRE]: 0.4,
        }, 'Magic shield', 3, actor);
    }
}