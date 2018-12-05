import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class WeaknessEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('weakness', 'Weakness', 3, 0.8, actor);
    }
}