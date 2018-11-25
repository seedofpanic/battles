import {Action} from '../action';
import {Effect} from '../effect';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class DeBuffAction extends Action {
    constructor(actor: Unit,
                private deBuffEffect: new (actor: Unit) => Effect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    beforeResolve(combat?: Combat, self?: Unit, target?: Unit) {
        target.addEffect(this, new this.deBuffEffect(self));
    }
}