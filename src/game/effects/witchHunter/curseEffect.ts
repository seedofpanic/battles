import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class CurseEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('curse', 'Curse', 2, 0.7, actor);
    }
}