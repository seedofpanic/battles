import {Action} from "../action";
import {Combat} from "../combat";
import {Unit} from '../unit';

export class HealAction extends Action {
    constructor(name: string, private value: number) {
        super(name);
    }

    perform(combat: Combat, self: Unit) {
        self.increaseHp(this, this.value);

        super.perform(combat);
    }
}