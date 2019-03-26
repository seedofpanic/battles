import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class WeaknessEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('weakness', 'Weakness', 3, 0.8, actor);
    }
}