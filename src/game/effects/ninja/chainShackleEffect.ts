import {Effect} from '../../effect';
import {Unit} from '../../unit';

export class ChainShackleEffect extends Effect {
    constructor(actor: Unit) {
        super('chain_shackle', 'Chain shackle', 3, actor);
    }
}