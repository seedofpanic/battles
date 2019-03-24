import {BuffAction} from '../buffAction';
import {SelfHealEffect} from '../../effects/priest/selfHealEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class SelfHealAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor,
            SelfHealEffect,
        'Self Heal', 5);
    }
}