import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {calcDamage} from '../../utils/calcDamage';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export class DotEffect extends Effect {
    constructor(id: string,
                name: string,
                private minDamage: number,
                private maxDamage: number,
                private damageType: DamageTypes,
                roundsCount: number,
                actor: ICharacter,
    ) {
        super(id, name, roundsCount, actor);
    }

    preTick(self: ICharacter) {
        self.decreaseHp(this, calcDamage(this.minDamage, this.maxDamage)
            * self.getResist(this.damageType, this), this.damageType);

        super.preTick(self);
    }
}