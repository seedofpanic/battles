import {Action} from '../action';
import {Effect} from '../effect';
import {Player} from '../units/player';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class DeBuffAction extends Action {
    constructor(private deBuffEffect: Effect, name: string, cooldown = 0, maxCharges = 1) {
        super(name, cooldown, maxCharges);
    }

    beforeResolve(combat?: Combat, self?: Unit, target?: Unit) {
        target.addEffect(this, this.deBuffEffect);
    }
}