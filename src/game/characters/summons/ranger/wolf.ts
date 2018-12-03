import {DamageTypes} from '../../../models/damageTypes';
import {HitAction} from '../../../actions/hitAction';
import {Character} from '../../../character';
import {IAction} from '../../../../models/action';
import {IUnit} from '../../../../models/unit';

export class Wolf extends Character {
    actions: { [name: string]: IAction };
    health = 20;
    healthMax = 20;
    name = 'Wolf';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'bite': new HitAction(actor, 'Bite', 1, 3, DamageTypes.CUTTING)
        };
    }
}