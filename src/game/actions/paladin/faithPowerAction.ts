import {BuffAction} from '../buffAction';
import {FaithPowerEffect} from '../../effects/paladin/faithPowerEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class FaithPowerAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, FaithPowerEffect, 'Faith power', 4);
    }
}