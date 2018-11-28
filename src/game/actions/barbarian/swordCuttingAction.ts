import {DamageTypes} from '../../models/damageTypes';
import {HitAction} from '../hitAction';
import {CuttingEffect} from '../../effects/cuttingEffect';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

const NAME = 'Bleeding wound';
const MIN_DAMAGE = 5;
const MAX_DAMAGE = 9;
const CRIT_CHANCE = 0.1;
const CRIT_MULTIPLIER = 1;
const COOLDOWN = 1;
const MAX_CHARGES = 1;

const CUTTING_EFFECT_MIN_DAMAGE = 1.66;
const CUTTING_EFFECT_MAX_DAMAGE = 1.66;
const CUTTING_EFFECT_ROUNDS_COUNT = 3;

export class SwordCuttingAction extends HitAction {
    constructor(actor: IUnit) {
        super(actor, NAME, MIN_DAMAGE, MAX_DAMAGE, DamageTypes.CUTTING,
            CRIT_CHANCE, CRIT_MULTIPLIER, COOLDOWN, MAX_CHARGES);
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new CuttingEffect(
            CUTTING_EFFECT_MIN_DAMAGE,
            CUTTING_EFFECT_MAX_DAMAGE,
            DamageTypes.CUTTING,
            CUTTING_EFFECT_ROUNDS_COUNT,
            self,
        ));
    }
}