import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class GodArmourEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('god_armour', {
            [DamageTypes.HOLY]: 0.8,
            [DamageTypes.DEATH]: 0.8,
            [DamageTypes.FIRE]: 0.8,
        }, 'God armour', 4, actor);
    }
}