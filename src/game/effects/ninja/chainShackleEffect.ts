import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';

export class ChainShackleEffect extends Effect {
    constructor(actor: IUnit) {
        super('chain_shackle', 'Chain shackle', 3, actor);
    }
}