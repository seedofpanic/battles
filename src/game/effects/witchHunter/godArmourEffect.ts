import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class GodArmourEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('god_armour', {
            [DamageTypes.HOLY]: 0.4,
            [DamageTypes.DEATH]: 0.4,
            [DamageTypes.FIRE]: 0.4,
        }, 'God armour', 4, actor);
    }
}