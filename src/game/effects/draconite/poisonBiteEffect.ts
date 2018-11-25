import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {Unit} from '../../unit';

export const POISON_BITE_EFFECT = 'poison_bite';

export class PoisonBiteEffect extends DotEffect {
    constructor(actor: Unit) {
        super(POISON_BITE_EFFECT, 'Poison bite', 2, 4, DamageTypes.POISON, 3, actor);
    }
}