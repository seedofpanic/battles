import {IUnit} from '../../../models/unit';
import {Action} from '../../action';
import {ICombat} from '../../../models/combat';
import {Wolf} from '../../characters/summons/ranger/wolf';
import {ICharacter} from '../../../models/character';

export class AnimalCareAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Animal care');
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        combat.charactersArr.forEach(unit => {
            if (unit instanceof Wolf) {
                unit.increaseHp(this, unit.healthMax * 0.3);
            }
        });
    }
}