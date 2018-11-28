import {BuffAction} from '../buffAction';
import {HellsistanceEffect} from '../../effects/demon/hellsistanceEffect';
import {IUnit} from '../../../models/unit';

export class HellsistanceAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, HellsistanceEffect, 'Hellsistance', 4);
    }
}