import {Character} from '../../character';
import {Action} from '../../action';
import {DamageTypes} from '../../models/damageTypes';
import {HitAction} from '../../actions/hitAction';
import {Unit} from '../../unit';

export class Dog extends Character {
    actions: { [name: string]: Action };
    health = 20;
    healthMax = 20;
    name = 'Dog';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(source: Unit, id: string) {
        super(id);

        this.actions = {
            'bite': new HitAction(source, 'Bite', 1, 3, DamageTypes.CUTTING)
        };
    }
}