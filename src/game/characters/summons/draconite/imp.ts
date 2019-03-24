import {Character} from '../../../character';
import {DamageTypes} from '../../../models/damageTypes';
import {FireBallAction} from '../../../actions/mage/fireBallAction';
import {IAction} from '../../../../models/action';

export class Imp extends Character {
    actions: { [name: string]: IAction };
    health = 5;
    healthMax = 5;
    name = 'Imp';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'fireball': new FireBallAction(this)
        };
    }
}