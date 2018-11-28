import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class UnholyForceEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('unholy_force', 'Unholy force', 3, 1.2, actor);
    }
}