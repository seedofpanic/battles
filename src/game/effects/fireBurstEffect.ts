import {DamageModEffect} from './damageModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const FIRE_BURST_EFFECT = 'fire_burst';

export class FireBurstEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super(FIRE_BURST_EFFECT, 'Fire burst', 3, {
            [DamageTypes.FIRE]: 1.2
        }, actor);
    }
}