import {Effect} from '../../effect';
import {Unit} from '../../unit';

export class VanishEffect extends Effect {
    constructor(actor: Unit) {
        super('vanish', 'Vanish', 1, actor);
    }
}