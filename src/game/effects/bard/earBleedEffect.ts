import {DotEffect} from '../dotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class EarBleedEffect extends DotEffect {
    constructor(actor: IUnit) {
        super('ear_bleed', 'Ear bleed', 2, 4, DamageTypes.DEATH, 3, actor);
    }
}