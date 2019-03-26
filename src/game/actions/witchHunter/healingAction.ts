import {IUnit} from '../../../models/unit';
import {HealAction} from '../healAction';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

export class HealingAction extends HealAction {
    constructor(actor: ICharacter) {
        super(actor, 'Healing', 10, 6);
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.beforeResolve(combat, self, target);

        self.effects = self.effects.filter(effect => effect.type[EffectType.BLEED]);
    }
}