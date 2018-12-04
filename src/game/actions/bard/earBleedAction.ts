import {HitAction} from '../hitAction';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICombat} from '../../../models/combat';
import {EarBleedEffect} from '../../effects/bard/earBleedEffect';
import {EffectType} from '../../models/effectType';

export class EarBleedAction extends HitAction {
    type = {
        ...super.type,
        [EffectType.SONG]: true
    };

    constructor(actor: IUnit) {
        super(actor, 'Ear bleed', 5, 5, DamageTypes.DEATH, 0, 1, 6);
    }

    perform(combat: ICombat, self: IUnit, target: IUnit) {
        super.perform(combat, self, target);

        target.addEffect(this, new EarBleedEffect(this.actor));
    }
}