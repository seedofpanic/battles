import {DotEffect} from '../dotEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class BloodyWoundEffect extends DotEffect {
    constructor(actor: Unit) {
        super('bloody_wound', 'Bloody wound', 3, 5, DamageTypes.CUTTING, 3, actor);
    }
}