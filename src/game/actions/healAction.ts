import {Action} from "../action";
import {Combat} from "../combat";
import {Unit} from '../unit';

export class HealAction extends Action {
    constructor(actor: Unit, name: string, private value: number, cooldown = 0, maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    perform(combat: Combat, self: Unit) {
        self.increaseHp(this, this.value);

        super.perform(combat);
    }
}