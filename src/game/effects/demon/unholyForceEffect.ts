import {DamageModEffect} from '../damageModEffect';
import {Unit} from '../../unit';

export class UnholyForceEffect extends DamageModEffect {
    constructor(actor: Unit) {
        super('unholy_force', 'Unholy force', 3, 1.2, actor);
    }
}