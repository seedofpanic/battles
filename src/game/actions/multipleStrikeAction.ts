import {Action} from '../action';
import {Combat} from '../combat';
import {Player} from '../player';

export class MultipleStrikeAction extends Action {
    constructor(name: string, private acion: Action, private times: number, private chance: number) {
        super(name);
    }

    perform(combat?: Combat, player?: Player, target?: Player) {
        if (Math.random() <= this.chance) {
            for (let i = 0; i < this.times; i++) {
                this.acion.perform(combat, player, target);
            }
        }

        super.perform(combat, player, target);
    }
}