import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class PirateTinctureEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('pirate_tincture', 'Pirate tincture', 3, 1.2, actor);
    }
}