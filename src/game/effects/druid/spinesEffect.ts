import {DotEffect} from '../dotEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';

export class SpinesEffect extends DotEffect {
    constructor(actor: Unit) {
        super('spines', 'Spines', 2, 2, DamageTypes.POISON, 3, actor);
    }
}