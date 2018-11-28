import {BuffAction} from '../buffAction';
import {GrandRumEffect} from '../../effects/pirate/grandRumEffect';
import {IUnit} from '../../../models/unit';

export class GrandRumAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, GrandRumEffect, 'Grand rum', 5);
    }
}