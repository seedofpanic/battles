import {Action} from '../action';
import {DamageTypes} from '../models/damageTypes';
import {Combat} from '../combat';
import {Unit} from '../unit';

export class RemoveEffectsAction extends Action {
    constructor(source: Unit, name: string) {
        super(source, name, 4, 2);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        self.character.effects.length = 0;
        super.perform(combat);
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage * 0.25;
    }
}