import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {Game} from '../game';
import {Combat} from '../combat';
import {Unit} from '../unit';

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

    perform(combat: Combat, self?: Unit, target?: Unit) {
        const targetResist = target.getResist(this.type);

        target.decreaseHp(this, this.calcDamage(self)
            * targetResist
            * this.getCrit(this.critChance * targetResist));

        super.perform(combat);
    }

    protected calcDamage(self: Unit): number {
        const damage = Game.calcDamage(this.minDamage, this.maxDamage);

        return self.character.effects.reduce((result, effect) => {
            return effect.damageMod(result, this.type);
        }, damage);
    }

    private getCrit(critChance: number): number {
        return critChance >= Math.random() ? this.critMultipier : 1;
    }
}