import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HellsistanceEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('hellsistance', {
            [DamageTypes.CUTTING]: 0.35,
            [DamageTypes.POISON]: 0.35,
            [DamageTypes.HOLY]: 0.35,
            [DamageTypes.DEATH]: 0.35,
        }, 'Hellsistance', 2, actor);
    }
}