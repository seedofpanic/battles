import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class HideEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('hide', {
            [DamageTypes.PIERCING]: 0,
            [DamageTypes.CUTTING]: 0,
            [DamageTypes.BLUNT]: 0,
            [DamageTypes.POISON]: 0,
        }, 'Hide', 1, actor);
    }
}