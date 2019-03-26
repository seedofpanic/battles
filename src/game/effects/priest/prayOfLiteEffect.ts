import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PrayOfLiteEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('pray_of_lite', 'Pray of lite', 3, 1.2, actor);
    }
}