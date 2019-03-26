import {DamageModEffect} from '../damageModEffect';
import {ICharacter} from '../../../models/character';

export class ChainShackleEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('chain_shackle', 'Chain shackle', 3, 0.85, actor);
    }
}