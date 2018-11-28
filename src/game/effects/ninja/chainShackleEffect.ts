import {IUnit} from '../../../models/unit';
import {DamageModEffect} from '../damageModEffect';

export class ChainShackleEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('chain_shackle', 'Chain shackle', 3, 0.85, actor);
    }
}