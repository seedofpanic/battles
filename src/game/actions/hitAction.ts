import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {calcDamage} from '../../utils/calcDamage';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';

export class HitAction extends Action {
    constructor(actor: IUnit,
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

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        const targetResist = target.getResist(this.type, this);
        const critMod = this.getCritMod(self, target, this.type, targetResist);

        const damage = this.calcDamage(self, target)
            * targetResist
            * critMod;

        target.decreaseHp(this, damage, this.type);

        super.perform(combat);
    }

    protected calcDamage(self: IUnit, target?: IUnit): number {
        const damage = calcDamage(this.minDamage, this.maxDamage);

        return self.character.effects.reduce((result, effect) => {
            return effect.damageMod(result, this.type, self, target);
        }, damage);
    }

    private getCrit(critChance: number): number {
        return critChance >= Math.random() ? this.critMultiplier : 1;
    }

    private getCritMod(self: IUnit, target: IUnit, type: DamageTypes, targetResist: number) {
        let critChance = this.critChance;

        critChance = self.character.effects
            .reduce((result, effect) => effect.critChanceMod(result, type), critChance);
        critChance = target.character.effects
            .reduce((result, effect) => effect.critChanceDefMod(result, type), critChance);

        if (critChance < 0) {
            critChance = 0;
        }

        let crit = this.getCrit(critChance * targetResist);

        if (crit !== 1) {
            crit = self.character.effects.reduce((result, effect) => effect.critMod(result, type), crit);
            crit = target.character.effects.reduce((result, effect) => effect.critDefMod(result, type), crit);
        }

        return crit;
    }
}