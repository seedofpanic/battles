import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class FaithPowerEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('faith_power', 'Faith power', 2, 1.2, actor);
    }
}