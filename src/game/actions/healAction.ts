import {Action} from "../action";
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

export class HealAction extends Action {
    constructor(actor: ICharacter, name: string, private value: number, cooldown = 0, maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        self.increaseHp(this, this.value);

        super.perform(combat);
    }
}