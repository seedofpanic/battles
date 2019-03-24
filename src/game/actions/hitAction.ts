import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {calcDamage} from '../../utils/calcDamage';
import {IUnit} from '../../models/unit';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

export class HitAction extends Action {
    constructor(actor: ICharacter,
                name: string,
                protected minDamage: number,
                protected maxDamage: number,
                protected damageType: DamageTypes,
                private critChance = 0,
                private critMultiplier = 1,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    perform(combat: ICombat, self: ICharacter, target: ICharacter) {
        const targetResist = target.getResist(this.damageType, this);
        const critMod = this.getCritMod(self, target, this.damageType, targetResist);

        const damage = this.calcDamage(self, target)
            * targetResist
            * critMod;

        target.decreaseHp(this, damage, this.damageType);

        super.perform(combat);
    }

    protected calcDamage(self: ICharacter, target?: ICharacter): number {
        const damage = calcDamage(this.minDamage, this.maxDamage);

        return self.effects.reduce((result, effect) => {
            return effect.damageMod(result, this.damageType, self, target, this);
        }, damage);
    }

    private getCrit(critChance: number): number {
        return critChance >= Math.random() ? this.critMultiplier : 1;
    }

    private getCritMod(self: ICharacter, target: ICharacter, type: DamageTypes, targetResist: number) {
        let critChance = this.critChance;

        critChance = self.effects
            .reduce((result, effect) => effect.critChanceMod(result, type), critChance);
        critChance = target.effects
            .reduce((result, effect) => effect.critChanceDefMod(result, type), critChance);

        if (critChance < 0) {
            critChance = 0;
        }

        let crit = this.getCrit(critChance * targetResist);

        if (crit !== 1) {
            crit = self.effects.reduce((result, effect) => effect.critMod(result, type), crit);
            crit = target.effects.reduce((result, effect) => effect.critDefMod(result, type), crit);
        }

        return crit;
    }
}