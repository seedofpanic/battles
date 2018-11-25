import {Unit} from '../../unit';
import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';

export class PoisonBladeEffect extends DotEffect {
    constructor(actor: Unit) {
        super('poison_blade', 'Poison blade', 2, 4, DamageTypes.POISON, 3, actor);
    }
}