import {Action} from "../action";
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';

export class HealAction extends Action {
    constructor(actor: IUnit, name: string, private value: number, cooldown = 0, maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    perform(combat: ICombat, self: IUnit) {
        self.increaseHp(this, this.value);

        super.perform(combat);
    }
}