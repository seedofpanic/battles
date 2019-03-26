import {BuffAction} from '../buffAction';
import {ArrrEffect} from '../../effects/pirate/ArrrEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class ArrrAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, ArrrEffect, 'Arrr', 5);
    }
}