import {DotEffect} from '../dotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class BaneEffect extends DotEffect {
    constructor(actor: IUnit) {
        super('bane', 'Bane', 2, 3, DamageTypes.POISON, 3, actor);
    }

}