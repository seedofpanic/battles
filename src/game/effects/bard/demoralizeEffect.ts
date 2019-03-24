import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class DemoralizeEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('demoralize', 'Demoralize', 3, 0.5, actor);
    }
}