import {IUnit} from '../../../models/unit';
import {Action} from '../../action';
import {ICombat} from '../../../models/combat';
import {Wolf} from '../../characters/summons/ranger/wolf';

export class AnimalCareAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Animal care');
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        combat.unitsArr.forEach(unit => {
            if (unit.character instanceof Wolf) {
                unit.increaseHp(this, unit.character.healthMax * 0.3);
            }
        });
    }
}