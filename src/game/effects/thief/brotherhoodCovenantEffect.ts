import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class BrotherhoodCovenantEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('brotherhood_covenant', {
            [DamageTypes.PIERCING]: 0.5,
            [DamageTypes.FIRE]: 0.5,
        }, 'Brotherhood covenant', 2, actor);
    }
}