import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class MagicProofEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('magic_proof', {
            [DamageTypes.HOLY]: 0.35,
            [DamageTypes.DEATH]: 0.35,
            [DamageTypes.FIRE]: 0.35,
        }, 'Magic proof', 3, actor);
    }
}