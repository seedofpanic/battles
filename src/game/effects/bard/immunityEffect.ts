import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class ImmunityEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('immunity', {
            [DamageTypes.HOLY]: 0.65,
            [DamageTypes.FIRE]: 0.65,
            [DamageTypes.DEATH]: 0.65,
        }, 'Immunity', 6, actor);
    }
}