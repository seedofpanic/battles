import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class PrayOfLiteEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('pray_of_lite', 'Pray of lite', 3, 1.2, actor);
    }
}