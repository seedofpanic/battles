import {Character} from '../../character';
import {Action} from '../../action';
import {DamageTypes} from '../../models/damageTypes';
import {HitAction} from '../../actions/hitAction';

export class Dog extends Character {
    actions: { [p: string]: Action } = {
        'bite': new HitAction('Bite', 1, 3, DamageTypes.CUTTING)
    };
    health = 20;
    healthMax = 20;
    name = 'Dog';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

}