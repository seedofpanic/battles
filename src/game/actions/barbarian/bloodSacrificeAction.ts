import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class BloodSacrificeAction extends HitAction {
    constructor(actor: ICharacter,) {
        super(actor, 'Blood sacrifice', 0, 0, DamageTypes.SHADOW);
    }

    perform(combat: ICombat, self?: ICharacter, target?: ICharacter) {
        const health = self.health / 2;

        self.decreaseHp(this, health, DamageTypes.DEATH);

        this.minDamage = health;
        this.maxDamage = health;

        super.perform(combat, self, target);
    }
}