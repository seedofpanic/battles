import {BuffAction} from '../buffAction';
import {PrayEffect} from '../../effects/paladin/prayEffect';
import {IUnit} from '../../../models/unit';

export class PrayAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, PrayEffect, 'Pray', 5);
    }
}