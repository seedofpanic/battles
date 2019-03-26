import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HardenedSkinEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('hardened_skin', {
            [DamageTypes.PIERCING]: 0.4,
            [DamageTypes.BLUNT]: 0.4,
            [DamageTypes.CUTTING]: 0.4,
        }, 'Hardened skin', 3, actor);
    }
}