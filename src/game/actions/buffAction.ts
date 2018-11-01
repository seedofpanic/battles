import {Action} from '../action';
import {Effect} from '../effect';
import {Player} from '../player';
import {Combat} from '../combat';

export class BuffAction extends Action {
    constructor(private buffEffect: Effect, name: string, cooldown = 0, maxCharges = 1) {
        super(name, cooldown, maxCharges);
    }

    beforeResolve(combat?: Combat, player?: Player, target?: Player) {
        player.addEffect(this, this.buffEffect);
    }
}