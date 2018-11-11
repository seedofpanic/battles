import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

const NAME = 'Blood leach';
const MIN_DAMAGE = 1;
const MAX_DAMAGE = 10;
const CRIT_CHANCE = 0;
const CRIT_MULTIPLIER = 1;

const HEAL_AMOUNT = 5;

export class BloodySymbolAction extends HitAction {
    constructor(source: Unit) {
        super(source, NAME, MIN_DAMAGE, MAX_DAMAGE, DamageTypes.PIERCING, CRIT_CHANCE, CRIT_MULTIPLIER, 3);
    }

    perform(combat: Combat, self: Unit, target: Unit) {
        super.perform(combat, self, target);

        self.increaseHp(this, HEAL_AMOUNT);
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage * 2;
    }
}