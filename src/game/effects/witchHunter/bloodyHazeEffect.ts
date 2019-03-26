import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class BloodyHazeEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('bloody_haze', 'Bloody haze', 3, 1.15, actor);
    }
}