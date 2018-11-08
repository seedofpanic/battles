import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {Game} from '../game';
import {Combat} from '../combat';
import {Unit} from '../unit';
import {calcDamage} from '../../utils/calcDamage';

export class HitAction extends Action {
    constructor(name: string,
                protected minDamage: number,
                protected maxDamage: number,
                private type: DamageTypes,
                private critChance = 0,
                private critMultipier = 1,
                cooldown = 0,
                maxCharges = 1) {
        super(name, cooldown, maxCharges);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        const targetResist = target.getResist(this.type);

        target.decreaseHp(this, this.calcDamage(self, target)
            * targetResist
            * this.getCrit(this.critChance * targetResist));

        super.perform(combat);
    }

    protected calcDamage(self: Unit, target?: Unit): number {
        const damage = calcDamage(this.minDamage, this.maxDamage);

        return self.character.effects.reduce((result, effect) => {
            return effect.damageMod(result, this.type, self, target);
        }, damage);
    }

    private getCrit(critChance: number): number {
        return critChance >= Math.random() ? this.critMultipier : 1;
    }
}