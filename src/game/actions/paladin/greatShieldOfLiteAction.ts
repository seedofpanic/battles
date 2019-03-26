import {BuffAction} from '../buffAction';
import {GreatShieldOfLiteEffect} from '../../effects/paladin/greatShieldOfLiteEffect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {ICharacter} from '../../../models/character';

export class GreatShieldOfLiteAction extends BuffAction {
    effectsArr = [EffectType.POISON, EffectType.BLEED];

    constructor(actor: ICharacter) {
        super(actor, GreatShieldOfLiteEffect, 'Great shield of lite', 6);
    }

    perform(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.perform(combat, self, target);

        self.effects = self.effects.filter(effect =>
            this.effectsArr.every(type => !effect.type[type])
        );
    }
}