import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {GreatShieldOfLiteEffect} from '../../effects/paladin/greatShieldOfLiteEffect';
import {Combat} from '../../combat';

export class GreatShieldOfLiteAction extends BuffAction {
    effectsArr = [EffectType.POISON, EffectType.BLEED];

    constructor(actor: Unit) {
        super(actor, GreatShieldOfLiteEffect, 'Great shield of lite', 6);
    }

    perform(combat?: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        self.character.effects = self.character.effects.filter(effect =>
            this.effectsArr.every(type => type !== effect.type)
        );
    }
}