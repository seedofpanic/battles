import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BloodyHazeEffect} from '../../effects/witchHunter/bloodyHazeEffect';
import {ICharacter} from '../../../models/character';

export class BloodyHazeAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, BloodyHazeEffect, 'Bloody haze', 6);
    }
}