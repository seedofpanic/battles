import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class UndeadAuraEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('undead_aura', 'Undead aura', 3, 1.2, actor);
    }
}