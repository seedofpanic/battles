import {DamageModEffect} from '../damageModEffect';
import {Unit} from '../../unit';

export class FaithPowerEffect extends DamageModEffect {
    constructor(actor: Unit) {
        super('faith_power', 'Faith power', 2, 1.2, actor);
    }
}