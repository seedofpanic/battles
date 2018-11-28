import {Character} from '../../../character';
import {IAction} from '../../../../models/action';
import {DamageTypes} from '../../../models/damageTypes';
import {IUnit} from '../../../../models/unit';
import {HitAction} from '../../../actions/hitAction';

export class Skeleton extends Character {
    actions: { [name: string]: IAction };
    health = 20;
    healthMax = 20;
    name = 'Skeleton';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'hit': new HitAction(actor, 'hit', 1, 3, DamageTypes.CUTTING)
        };
    }
}