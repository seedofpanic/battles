import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PirateTinctureEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('pirate_tincture', 'Pirate tincture', 3, 1.2, actor);
    }
}