import {BuffAction} from '../buffAction';
import {ArrrEffect} from '../../effects/pirate/ArrrEffect';
import {IUnit} from '../../../models/unit';

export class ArrrAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, ArrrEffect, 'Arrr', 5);
    }
}