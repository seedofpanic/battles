import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {HellsistanceEffect} from '../../effects/demon/hellsistanceEffect';

export class HellsistanceAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, HellsistanceEffect, 'Hellsistance', 4);
    }
}