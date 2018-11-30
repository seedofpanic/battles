import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {ThrowingKnivesEffect} from '../../effects/thief/throwingKnivesEffect';

export class ThrowingKnivesAction extends DeBuffAction {
    constructor(actor: IUnit) {
        super(actor, ThrowingKnivesEffect, 'Throwing knives', 6);
    }
}