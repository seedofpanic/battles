import {DamageTypes} from './models/damageTypes';
import {IAction} from '../models/action';
import {ICombat} from '../models/combat';
import {ICharacter} from '../models/character';

// TODO: rename to Skill
export abstract class Action implements IAction {
    type: {[name: string]: boolean} = {};
    charges: number;
    recharge = 0;

    constructor(public actor: ICharacter, public name: string, private cooldown = 0, private maxCharges = 1) {
        this.charges = maxCharges;
    }

    isAvailable(): boolean {
        return this.charges > 0;
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
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

    beforeResolve(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage;
    }
}