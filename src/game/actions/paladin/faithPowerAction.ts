import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {FaithPowerEffect} from '../../effects/paladin/faithPowerEffect';

export class FaithPowerAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, FaithPowerEffect, 'Faith power', 4);
    }
}