import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class UndeadAuraEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('undead_aura', 'Undead aura', 3, 1.2, actor);
    }
}