import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class DemoralizeEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('demoralize', 'Demoralize', 3, 0.5, actor);
    }
}