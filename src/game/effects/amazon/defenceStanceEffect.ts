import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class DefenceStanceEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('defence_stance', {
            [DamageTypes.CUTTING]: 0.25,
            [DamageTypes.PIERCING]: 0.25,
        }, 'Defence stance', 3, actor);
    }
}