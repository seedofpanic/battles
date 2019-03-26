import {Action} from '../action';
import {Ai} from '../units/ai';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

let nextSummonId = 1;

export class SummonAction extends Action {
    constructor(actor: ICharacter, name: string, private summonId: string,
                private summon: new (id: string) => ICharacter, cooldown: number) {
        super(actor, name, cooldown);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        const summon = new this.summon(this.summonId);
        const team = self.team;
        const unit = new Ai(`${summon.id}_${nextSummonId++}`, team, summon, combat);

        unit.character = summon;

        combat.addCharacter(summon, self.team);

        super.perform(combat, self, target);
    }
}