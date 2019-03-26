import {HealAction} from '../healAction';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class NatureHealAction extends HealAction {
    constructor(actor: ICharacter) {
        super(actor, 'Heal', 20, 6);
    }
}