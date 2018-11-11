import {Action} from "../action";
import {Combat} from "../combat";
import {Unit} from '../unit';

export class HealAction extends Action {
    constructor(source: Unit, name: string, private value: number) {
        super(source, name);
    }

    perform(combat: Combat, self: Unit) {
        self.increaseHp(this, this.value);

        super.perform(combat);
    }
}