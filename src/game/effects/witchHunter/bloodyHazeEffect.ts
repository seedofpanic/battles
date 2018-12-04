import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class BloodyHazeEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('bloody_haze', 'Bloody haze', 3, 1.15, actor);
    }
}