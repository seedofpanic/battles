import {Action} from '../action';
import {Character} from '../character';
import {Ai} from '../units/ai';
import {Combat} from '../combat';

export class SummonAction extends Action {
    constructor(name: string, private summon: Character) {
        super(name);
    }

    perform(combat: Combat) {
        combat.addSummon(this.summon);
    }
}