import {ICombat} from '../../../models/combat';
import {Action} from '../../action';
import {UndeadPowerDamageEffect} from '../../effects/necromancer/undeadPowerDamageEffect';
import {UndeadPowerArmorEffect} from '../../effects/necromancer/undeadPowerArmorEffect';
import {ICharacter} from '../../../models/character';

export class UndeadPowerAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Undead power', 3);
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        self.addEffect(this, new UndeadPowerDamageEffect(self));
        self.addEffect(this, new UndeadPowerArmorEffect(self));
    }
}