import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {GodArmourEffect} from '../../effects/witchHunter/godArmourEffect';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

export class GodArmourAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, GodArmourEffect, 'God armour', 4);
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        super.beforeResolve(combat, self, target);

        self.effects = self.effects.filter(effect => effect.type[EffectType.POISON]);
    }
}