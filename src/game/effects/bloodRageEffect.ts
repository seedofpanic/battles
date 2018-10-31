import {DamageModEffect} from './damageModEffect';
import {Player} from '../player';

export class BloodRageEffect extends DamageModEffect {
    id = 'blood_rage';

    constructor() {
        super('Blood rage', 3);
    }

    preTick(player: Player) {
        player.decreaseHp(this, 1);
    }
}