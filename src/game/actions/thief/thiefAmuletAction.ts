import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';

const removeTypes: {[name: string]: boolean} = {
    [EffectType.BLEED]: true,
    [EffectType.POISON]: true,
    [EffectType.BLIND]: true,
    [EffectType.STUN]: true,
};

export class ThiefAmuletAction extends Action {

    constructor(actor: IUnit) {
        super(actor, 'Thief amulet', 5);
    }

    beforeResolve(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.beforeResolve(combat, self, target);
        self.character.effects = self.character.effects.filter(effect => !removeTypes[effect.type]);
    }
}