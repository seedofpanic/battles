import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {GodArmourEffect} from '../../effects/witchHunter/godArmourEffect';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';

export class GodArmourAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, GodArmourEffect, 'God armour', 4);
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        super.beforeResolve(combat, self, target);

        self.character.effects = self.character.effects.filter(effect => effect.type[EffectType.POISON]);
    }
}