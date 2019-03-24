import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {Wolf} from '../../characters/summons/ranger/wolf';
import {BeastInsideEffect} from '../../effects/ranger/beastInsideEffect';
import {ICharacter} from '../../../models/character';

export class BeastInsideAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Beast inside', 6);
    }

    beforeResolve(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        combat.charactersArr.forEach(unit => {
            if (unit instanceof Wolf) {
                unit.addEffect(this, new BeastInsideEffect(this.actor));
            }
        });
    }
}