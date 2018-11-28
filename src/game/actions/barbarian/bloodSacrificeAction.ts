import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class BloodSacrificeAction extends HitAction {
    constructor(actor: IUnit,) {
        super(actor, 'Blood sacrifice', 0, 0, DamageTypes.SHADOW);
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
        const health = self.character.health / 2;

        self.decreaseHp(this, health, DamageTypes.DEATH);

        this.minDamage = health;
        this.maxDamage = health;

        super.perform(combat, self, target);
    }
}