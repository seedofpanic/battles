import {BuffAction} from '../buffAction';
import {SelfHealEffect} from '../../effects/priest/selfHealEffect';
import {IUnit} from '../../../models/unit';

export class SelfHealAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor,
            SelfHealEffect,
        'Self Heal', 5);
    }
}