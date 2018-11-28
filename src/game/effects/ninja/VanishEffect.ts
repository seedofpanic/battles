import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';

export class VanishEffect extends Effect {
    constructor(actor: IUnit) {
        super('vanish', 'Vanish', 1, actor);
    }
}