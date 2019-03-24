import {BuffAction} from '../buffAction';
import {HellsistanceEffect} from '../../effects/demon/hellsistanceEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HellsistanceAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, HellsistanceEffect, 'Hellsistance', 4);
    }
}