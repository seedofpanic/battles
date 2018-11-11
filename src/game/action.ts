import {DamageTypes} from './models/damageTypes';
import {Combat} from './combat';
import {Unit} from './unit';

// TODO: rename to Skill
export abstract class Action {
    charges: number;
    recharge = 0;

    constructor(public source: Unit, public name: string, private cooldown = 0, private maxCharges = 1) {
        this.charges = maxCharges;
    }

    isAvailable(): boolean {
        return this.charges > 0;
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        this.charges--;
    }

    tick() {
        if (this.charges >= this.maxCharges) {
            return;
        }

        if (this.recharge >= this.cooldown) {
            this.charges += 1;
            this.recharge = 0;
        } else {
            this.recharge++;
        }
    }

    beforeResolve(combat?: Combat, self?: Unit, target?: Unit) {
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage;
    }
}