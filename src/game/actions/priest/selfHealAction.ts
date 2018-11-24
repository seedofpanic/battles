import {Unit} from '../../unit';
import {BuffAction} from '../buffAction';
import {SelfHealEffect} from '../../effects/priest/selfHealEffect';

export class SelfHealAction extends BuffAction {
    constructor(source: Unit) {
        super(source,
            SelfHealEffect,
        'Self Heal', 5);
    }
}