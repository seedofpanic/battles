import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class CurseEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('curse', 'Curse', 2, 0.7, actor);
    }
}