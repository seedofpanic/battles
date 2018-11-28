import {BuffAction} from '../buffAction';
import {FaithPowerEffect} from '../../effects/paladin/faithPowerEffect';
import {IUnit} from '../../../models/unit';

export class FaithPowerAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, FaithPowerEffect, 'Faith power', 4);
    }
}