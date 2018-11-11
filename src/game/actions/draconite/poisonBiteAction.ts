import {HitAction} from '../hitAction';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {PoisonBiteEffect} from '../../effects/draconite/poisonBiteEffect';

export class PoisonBiteAction extends HitAction {
    constructor(source: Unit) {
        super(source, 'Poison bite', 1, 2, DamageTypes.CUTTING);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        target.addEffect(this, new PoisonBiteEffect(self));
    }
}