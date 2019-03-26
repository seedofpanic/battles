import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';
import {DefenceStanceEffect} from '../../effects/amazon/defenceStanceEffect';
import {ICharacter} from '../../../models/character';

export class DefenceStanceAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, DefenceStanceEffect, 'Defence stance', 6);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        self.effects = self.effects
            .filter(effect => !effect.type[EffectType.BLEED]);
    }
}