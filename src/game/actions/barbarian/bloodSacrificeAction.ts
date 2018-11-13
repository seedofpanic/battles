import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {Combat} from '../../combat';
import {Unit} from '../../unit';

export class BloodSacrificeAction extends HitAction {
    constructor(source: Unit,) {
        super(source, 'Blood sacrifice', 0, 0, DamageTypes.SHADOW);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        const health = self.character.health / 2;

        self.character.health = health;

        this.minDamage = health;
        this.maxDamage = health;

        super.perform(combat, self, target);
    }
}