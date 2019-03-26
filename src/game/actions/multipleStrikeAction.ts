import {Action} from '../action';
import {IUnit} from '../../models/unit';
import {IAction} from '../../models/action';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

export class MultipleStrikeAction extends Action {
    constructor(actor: ICharacter,
                name: string, private acion: IAction, private times: number, private chance: number) {
        super(actor, name);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        if (Math.random() <= this.chance) {
            for (let i = 0; i < this.times; i++) {
                this.acion.perform(combat, self, target);
            }
        }

        super.perform(combat, self, target);
    }
}