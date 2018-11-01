import {Action} from '../action';
import {Effect} from '../effect';
import {Player} from '../player';
import {Combat} from '../combat';

export class DeBuffAction extends Action {
    constructor(private deBuffEffect: Effect, name: string, cooldown = 0, maxCharges = 1) {
        super(name, cooldown, maxCharges);
    }

    beforeResolve(combat?: Combat, player?: Player, target?: Player) {
        target.addEffect(this, this.deBuffEffect);
    }
}