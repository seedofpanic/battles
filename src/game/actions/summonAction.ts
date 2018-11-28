import {Action} from '../action';
import {Ai} from '../units/ai';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

let nextSummonId = 1;

export class SummonAction extends Action {
    constructor(actor: IUnit, name: string, private summonId: string,
                private summon: new (actor: IUnit, id: string) => ICharacter) {
        super(actor, name);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        const summon = new this.summon(self, this.summonId);
        const team = self.team;
        const unit = new Ai(`${summon.id}_${nextSummonId++}`, team, summon, combat);

        combat.addSummon(unit);
    }
}