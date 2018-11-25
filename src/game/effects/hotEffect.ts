import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {calcDamage} from '../../utils/calcDamage';

export class HotEffect extends Effect {
    constructor(id: string,
                name: string,
                private minHeal: number,
                private maxHeal: number,
                private type: DamageTypes,
                roundsCount: number,
                actor: Unit,
    ) {
        super(id, name, roundsCount, actor);
    }

    preTick(self: Unit) {
        self.increaseHp(this, calcDamage(this.minHeal, this.maxHeal));
        super.preTick(self);
    }
}