import {IUnit} from '../../../models/unit';
import {HealAction} from '../healAction';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';

export class HealingAction extends HealAction {
    constructor(actor: IUnit) {
        super(actor, 'Healing', 10, 6);
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        super.beforeResolve(combat, self, target);

        self.character.effects = self.character.effects.filter(effect => effect.type[EffectType.BLEED]);
    }
}