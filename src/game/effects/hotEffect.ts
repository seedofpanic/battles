import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {Game} from '../game';
import {Unit} from '../unit';

export class HotEffect extends Effect {
    id = 'hot';

    constructor(name: string,
                private minHeal: number,
                private maxHeal: number,
                private type: DamageTypes,
                roundsCount: number,
    ) {
        super(name, roundsCount);
    }

    preTick(self: Unit) {
        self.increaseHp(this, Game.calcDamage(this.minHeal, this.maxHeal));
        super.preTick(self);
    }
}