import {Action} from '../action';
import {Player} from '../player';
import {DamageTypes} from '../models/damageTypes';
import {Game} from '../game';
import {Combat} from '../combat';

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

    perform(combat: Combat, player?: Player, target?: Player) {
        const targetResist = target.getResist(this.type);

        target.decreaseHp(this, this.calcDamage(player)
            * targetResist
            * this.getCrit(this.critChance * targetResist));

        super.perform(combat);
    }

    protected calcDamage(player: Player): number {
        const damage = Game.calcDamage(this.minDamage, this.maxDamage);

        return player.character.effects.reduce((result, effect) => {
            return effect.damageMod(result, this.type);
        }, damage);
    }

    private getCrit(critChance: number): number {
        return critChance >= Math.random() ? this.critMultipier : 1;
    }
}