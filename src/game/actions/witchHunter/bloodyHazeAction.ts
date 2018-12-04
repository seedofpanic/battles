import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BloodyHazeEffect} from '../../effects/witchHunter/bloodyHazeEffect';

export class BloodyHazeAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, BloodyHazeEffect, 'Bloody haze', 6);
    }
}