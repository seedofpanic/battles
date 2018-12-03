import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class DefenceStanceEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('defence_stance', {
            [DamageTypes.CUTTING]: 0.5,
            [DamageTypes.PIERCING]: 0.5,
        }, 'Defence stance', 3, actor);
    }
}