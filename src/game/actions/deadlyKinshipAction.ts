import {Action} from '../action';
import {Unit} from '../unit';
import {Combat} from '../combat';
import {DeadlyKinshipEffect} from '../effects/deadlyKinshipEffect';

export class DeadlyKinshipAction extends Action {
    constructor() {
        super('Deadly kinship', 4);
    }

    beforeResolve(combat: Combat, self: Unit, target: Unit) {
        target.addEffect(this, new DeadlyKinshipEffect());
    }
}