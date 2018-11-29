import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class HideEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('hide', {
            [DamageTypes.PIERCING]: 0,
            [DamageTypes.CUTTING]: 0,
            [DamageTypes.BLUNT]: 0,
            [DamageTypes.POISON]: 0,
        }, 'Hide', 1, actor);
    }
}