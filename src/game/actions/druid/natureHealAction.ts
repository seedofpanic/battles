import {HealAction} from '../healAction';
import {IUnit} from '../../../models/unit';

export class NatureHealAction extends HealAction {
    constructor(actor: IUnit) {
        super(actor, 'Heal', 20, 6);
    }
}