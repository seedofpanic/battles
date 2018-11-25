import {Unit} from '../../unit';
import {BuffAction} from '../buffAction';
import {SelfHealEffect} from '../../effects/priest/selfHealEffect';

export class SelfHealAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor,
            SelfHealEffect,
        'Self Heal', 5);
    }
}