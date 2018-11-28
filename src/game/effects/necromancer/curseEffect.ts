import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class CurseEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('curse', 'Curse', 3, 0.8, actor);
    }
}