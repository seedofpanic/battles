import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {calcDamage} from '../../utils/calcDamage';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export class HotEffect extends Effect {
    constructor(id: string,
                name: string,
                private minHeal: number,
                private maxHeal: number,
                private damageType: DamageTypes,
                roundsCount: number,
                actor: ICharacter,
    ) {
        super(id, name, roundsCount, actor);
    }

    preTick(self: ICharacter) {
        self.increaseHp(this, calcDamage(this.minHeal, this.maxHeal));
        super.preTick(self);
    }
}