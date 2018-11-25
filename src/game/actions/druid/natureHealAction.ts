import {HealAction} from '../healAction';
import {Unit} from '../../unit';

export class NatureHealAction extends HealAction {
    constructor(actor: Unit) {
        super(actor, 'Heal', 20, 6);
    }
}