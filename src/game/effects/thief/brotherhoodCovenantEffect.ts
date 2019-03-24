import {ResistsModEffect} from '../resistsModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class BrotherhoodCovenantEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('brotherhood_covenant', {
            [DamageTypes.PIERCING]: 0.25,
            [DamageTypes.FIRE]: 0.25,
        }, 'Brotherhood covenant', 2, actor);
    }
}