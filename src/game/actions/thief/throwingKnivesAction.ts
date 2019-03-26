import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {ThrowingKnivesEffect} from '../../effects/thief/throwingKnivesEffect';
import {ICharacter} from '../../../models/character';

export class ThrowingKnivesAction extends DeBuffAction {
    constructor(actor: ICharacter) {
        super(actor, ThrowingKnivesEffect, 'Throwing knives', 6);
    }
}