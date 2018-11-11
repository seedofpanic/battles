import {Action} from '../action';
import {Character} from '../character';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class SummonAction extends Action {
    constructor(source: Unit, name: string, private summonId: string,
                private summon: new (source: Unit, id: string) => Character) {
        super(source, name);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        combat.addSummon(new this.summon(self, this.summonId), self.team);
    }
}