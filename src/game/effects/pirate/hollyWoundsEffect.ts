import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export class HollyWoundsEffect extends DotEffect {
    constructor(source: Unit) {
        super('holly_wounds', 'Holly wounds', 2, 3, DamageTypes.CUTTING, 3, source);
    }
}