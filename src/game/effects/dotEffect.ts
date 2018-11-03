import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {calcDamage} from '../../utils/calcDamage';

export class DotEffect extends Effect {
    id = 'dot';

    constructor(name: string,
                private minDamage: number,
                private maxDamage: number,
                private type: DamageTypes,
                roundsCount: number,
    ) {
        super(name, roundsCount);
    }

    preTick(self: Unit) {
        self.decreaseHp(this, calcDamage(this.minDamage, this.maxDamage)
            * self.getResist(this.type));

        super.preTick(self);
    }
}