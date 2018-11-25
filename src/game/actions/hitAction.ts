import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {Combat} from '../combat';
import {Unit} from '../unit';
import {calcDamage} from '../../utils/calcDamage';

export class HitAction extends Action {
    constructor(actor: Unit,
                name: string,
                protected minDamage: number,
                protected maxDamage: number,
                protected type: DamageTypes,
                private critChance = 0,
                private critMultiplier = 1,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        const targetResist = target.getResist(this.type, this);
        let crit = this.getCrit(this.critChance * targetResist);

        if (crit !== 1) {
            crit = self.character.effects.reduce((result, effect) => effect.critMod(result, this.type), crit);
        }

        const damage = this.calcDamage(self, target)
            * targetResist
            * crit;

        target.decreaseHp(this, damage, this.type);

        super.perform(combat);
    }

    protected calcDamage(self: Unit, target?: Unit): number {
        const damage = calcDamage(this.minDamage, this.maxDamage);

        return self.character.effects.reduce((result, effect) => {
            return effect.damageMod(result, this.type, self, target);
        }, damage);
    }

    private getCrit(critChance: number): number {
        return critChance >= Math.random() ? this.critMultiplier : 1;
    }
}