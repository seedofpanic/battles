import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {calcDamage} from '../../utils/calcDamage';
import {IUnit} from '../../models/unit';

export class HotEffect extends Effect {
    constructor(id: string,
                name: string,
                private minHeal: number,
                private maxHeal: number,
                private damageType: DamageTypes,
                roundsCount: number,
                actor: IUnit,
    ) {
        super(id, name, roundsCount, actor);
    }

    preTick(self: IUnit) {
        self.increaseHp(this, calcDamage(this.minHeal, this.maxHeal));
        super.preTick(self);
    }
}