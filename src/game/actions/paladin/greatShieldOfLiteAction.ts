import {BuffAction} from '../buffAction';
import {GreatShieldOfLiteEffect} from '../../effects/paladin/greatShieldOfLiteEffect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';

export class GreatShieldOfLiteAction extends BuffAction {
    effectsArr = [EffectType.POISON, EffectType.BLEED];

    constructor(actor: IUnit) {
        super(actor, GreatShieldOfLiteEffect, 'Great shield of lite', 6);
    }

    perform(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.perform(combat, self, target);

        self.character.effects = self.character.effects.filter(effect =>
            this.effectsArr.every(type => type !== effect.type)
        );
    }
}