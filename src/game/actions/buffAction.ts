import {Action} from '../action';
import {Effect} from '../effect';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class BuffAction extends Action {
    constructor(private buffEffect: new () => Effect, name: string, cooldown = 0, maxCharges = 1) {
        super(name, cooldown, maxCharges);
    }

    beforeResolve(combat: Combat, self: Unit, target: Unit) {
        self.addEffect(this, new this.buffEffect());
    }
}