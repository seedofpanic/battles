import {DamageModEffect} from '../damageModEffect';
import {Unit} from '../../unit';

export class PirateTinctureEffect extends DamageModEffect {
    constructor(source: Unit) {
        super('pirate_tincture', 'Pirate tincture', 3, 1.2, source);
    }
}