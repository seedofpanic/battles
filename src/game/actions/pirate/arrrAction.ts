import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {ArrrEffect} from '../../effects/pirate/ArrrEffect';

export class ArrrAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, ArrrEffect, 'Arrr', 5);
    }
}