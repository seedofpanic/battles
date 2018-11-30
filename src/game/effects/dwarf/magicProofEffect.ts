import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class MagicProofEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('magic_proof', {
            [DamageTypes.HOLY]: 0.7,
            [DamageTypes.DEATH]: 0.7,
            [DamageTypes.FIRE]: 0.7,
        }, 'Magic proof', 3, actor);
    }
}