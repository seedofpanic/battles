import {Action} from '../action';
import {Effect} from '../effect';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class BuffAction extends Action {
    constructor(source: Unit,
                private buffEffect: new (source: Unit) => Effect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(source, name, cooldown, maxCharges);
    }

    beforeResolve(combat: Combat, self: Unit, target: Unit) {
        self.addEffect(this, new this.buffEffect(self));
    }
}