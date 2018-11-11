import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {GrandRumEffect} from '../../effects/pirate/grandRumEffect';

export class GrandRumAction extends BuffAction {
    constructor(source: Unit) {
        super(source, GrandRumEffect, 'Grand rum', 5);
    }
}