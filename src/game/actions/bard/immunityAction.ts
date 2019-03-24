import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {ImmunityEffect} from '../../effects/bard/immunityEffect';
import {ICharacter} from '../../../models/character';

export class ImmunityAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, ImmunityEffect, 'Immunity', 6);
    }
}
