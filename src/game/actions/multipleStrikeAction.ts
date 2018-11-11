import {Action} from '../action';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class MultipleStrikeAction extends Action {
    constructor(source: Unit, name: string, private acion: Action, private times: number, private chance: number) {
        super(source, name);
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        if (Math.random() <= this.chance) {
            for (let i = 0; i < this.times; i++) {
                this.acion.perform(combat, self, target);
            }
        }

        super.perform(combat, self, target);
    }
}