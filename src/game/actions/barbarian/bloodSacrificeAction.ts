import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

export class BloodSacrificeAction extends HitAction {
    constructor(actor: Unit,) {
        super(actor, 'Blood sacrifice', 0, 0, DamageTypes.SHADOW);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        const health = self.character.health / 2;

        self.decreaseHp(this, health, DamageTypes.DEATH);

        this.minDamage = health;
        this.maxDamage = health;

        super.perform(combat, self, target);
    }
}