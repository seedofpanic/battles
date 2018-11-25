import {DamageModEffect} from '../damageModEffect';
import {Unit} from '../../unit';

export class PirateTinctureEffect extends DamageModEffect {
    constructor(actor: Unit) {
        super('pirate_tincture', 'Pirate tincture', 3, 1.2, actor);
    }
}