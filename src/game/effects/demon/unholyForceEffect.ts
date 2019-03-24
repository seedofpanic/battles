import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class UnholyForceEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('unholy_force', 'Unholy force', 3, 1.2, actor);
    }
}