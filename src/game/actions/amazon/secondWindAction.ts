import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {SecondWindEffect} from '../../effects/amazon/secondWindEffect';
import {ICharacter} from '../../../models/character';

export class SecondWindAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, SecondWindEffect, 'Second wind', 6);
    }
}