import {Action} from '../action';
import {Character} from '../character';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class SummonAction extends Action {
    constructor(name: string, private summonId: string, private summon: new (id: string) => Character) {
        super(name);
    }

    perform(combat: Combat, player: Unit) {
        combat.addSummon(new this.summon(this.summonId), player.team);
    }
}