import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {GrandRumEffect} from '../../effects/pirate/grandRumEffect';

export class GrandRumAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, GrandRumEffect, 'Grand rum', 5);
    }
}