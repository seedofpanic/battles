import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {PrayEffect} from '../../effects/paladin/prayEffect';

export class PrayAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, PrayEffect, 'Pray', 5);
    }
}