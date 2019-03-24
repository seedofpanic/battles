import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {SmokeScreenEffect} from '../../effects/ranger/smokeScreenEffect';
import {ICharacter} from '../../../models/character';

export class SmokeScreenAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, SmokeScreenEffect, 'Smoke screen', 5);
    }
}