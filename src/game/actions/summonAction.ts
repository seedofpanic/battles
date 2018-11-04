import {Action} from '../action';
import {Character} from '../character';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class SummonAction extends Action {
    constructor(name: string, private summon: Character) {
        super(name);
    }

    perform(combat: Combat, player: Unit) {
        combat.addSummon(this.summon, player.team);
    }
}