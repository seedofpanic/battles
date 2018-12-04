import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class ImmunityEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('immunity', {
            [DamageTypes.HOLY]: 0.65,
            [DamageTypes.FIRE]: 0.65,
            [DamageTypes.DEATH]: 0.65,
        }, 'Immunity', 6, actor);
    }
}