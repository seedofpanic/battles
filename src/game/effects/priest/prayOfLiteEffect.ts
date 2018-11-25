import {DamageModEffect} from '../damageModEffect';
import {Unit} from '../../unit';

export class PrayOfLiteEffect extends DamageModEffect {
    constructor(actor: Unit) {
        super('pray_of_lite', 'Pray of lite', 3, 1.2, actor);
    }
}