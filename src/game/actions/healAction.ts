import {Action} from "../action";
import {Combat} from "../combat";

export class HealAction extends Action {
    constructor(name: string, private value: number) {
        super(name);
    }

    perform(combat: Combat) {
        super.perform(combat);
    }
}