import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';
import {DefenceStanceEffect} from '../../effects/amazon/defenceStanceEffect';

export class DefenceStanceAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, DefenceStanceEffect, 'Defence stance', 6);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        self.character.effects = self.character.effects
            .filter(effect => !effect.type[EffectType.BLEED]);
    }
}