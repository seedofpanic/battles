import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {ArrrEffect} from '../../effects/pirate/ArrrEffect';

export class ArrrAction extends BuffAction {
    constructor(source: Unit) {
        super(source, ArrrEffect, 'Arrr', 5);
    }
}