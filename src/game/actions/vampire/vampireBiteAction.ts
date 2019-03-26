import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

const NAME = 'Blood leach';
const MIN_DAMAGE = 2;
const MAX_DAMAGE = 4;
const CRIT_CHANCE = 0;
const CRIT_MULTIPLIER = 1;

const HEAL_AMOUNT = 2;

export class VampireBiteAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, NAME, MIN_DAMAGE, MAX_DAMAGE, DamageTypes.PIERCING, CRIT_CHANCE, CRIT_MULTIPLIER);
    }

    perform(combat: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        self.increaseHp(this, HEAL_AMOUNT);
    }

    modifyIncomeDamage(damage: number, type: DamageTypes) {
        return damage * 2;
    }
}