import {Character} from '../../../character';
import {Action} from '../../../action';
import {DamageTypes} from '../../../models/damageTypes';
import {Unit} from '../../../unit';
import {FireBallAction} from '../../../actions/mage/fireBallAction';

export class Imp extends Character {
    actions: { [name: string]: Action };
    health = 20;
    healthMax = 20;
    name = 'Imp';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'fireball': new FireBallAction(actor)
        };
    }
}