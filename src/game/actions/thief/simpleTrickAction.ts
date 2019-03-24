import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {SimpleTrickEffect} from '../../effects/thief/simpleTrickEffect';
import {ICharacter} from '../../../models/character';

export class SimpleTrickAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, SimpleTrickEffect, 'Simple trick', 5);
    }
}