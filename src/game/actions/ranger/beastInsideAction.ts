import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {Wolf} from '../../characters/summons/ranger/wolf';
import {BeastInsideEffect} from '../../effects/ranger/beastInsideEffect';

export class BeastInsideAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Beast inside', 6);
    }

    beforeResolve(combat?: ICombat, self?: IUnit, target?: IUnit) {
        combat.unitsArr.forEach(unit => {
            if (unit.character instanceof Wolf) {
                unit.addEffect(this, new BeastInsideEffect(this.actor));
            }
        });
    }
}