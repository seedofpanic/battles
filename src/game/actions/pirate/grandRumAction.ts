import {BuffAction} from '../buffAction';
import {GrandRumEffect} from '../../effects/pirate/grandRumEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class GrandRumAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, GrandRumEffect, 'Grand rum', 5);
    }
}