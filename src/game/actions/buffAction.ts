import {Action} from '../action';
import {Effect} from '../effect';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class BuffAction extends Action {
    constructor(actor: Unit,
                private buffEffect: new (actor: Unit) => Effect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    beforeResolve(combat: Combat, self: Unit, target: Unit) {
        self.addEffect(this, new this.buffEffect(self));
    }
}