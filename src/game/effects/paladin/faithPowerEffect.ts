import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class FaithPowerEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('faith_power', 'Faith power', 2, 1.2, actor);
    }
}