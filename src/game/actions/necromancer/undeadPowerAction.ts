import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {Action} from '../../action';
import {UndeadPowerDamageEffect} from '../../effects/necromancer/undeadPowerDamageEffect';
import {UndeadPowerArmorEffect} from '../../effects/necromancer/undeadPowerArmorEffect';

export class UndeadPowerAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Undead power', 3);
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        self.addEffect(this, new UndeadPowerDamageEffect(self));
        self.addEffect(this, new UndeadPowerArmorEffect(self));
    }
}