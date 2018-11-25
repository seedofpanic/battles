import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {calcDamage} from '../../utils/calcDamage';

export class DotEffect extends Effect {
    constructor(id: string,
                name: string,
                private minDamage: number,
                private maxDamage: number,
                private type: DamageTypes,
                roundsCount: number,
                actor: Unit,
    ) {
        super(id, name, roundsCount, actor);
    }

    preTick(self: Unit) {
        self.decreaseHp(this, calcDamage(this.minDamage, this.maxDamage)
            * self.getResist(this.type, this), this.type);

        super.preTick(self);
    }
}