import {DamageModEffect} from './damageModEffect';
import {Unit} from '../unit';

export class BloodRageEffect extends DamageModEffect {
    id = 'blood_rage';

    constructor() {
        super('Blood rage', 3, 1.3);
    }

    preTick(self: Unit) {
        self.decreaseHp(this, 1);
    }
}