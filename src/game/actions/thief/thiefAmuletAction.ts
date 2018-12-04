import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';

const removeTypes: EffectType[] = [
    EffectType.BLEED,
    EffectType.POISON,
    EffectType.BLIND,
    EffectType.STUN
];

export class ThiefAmuletAction extends Action {

    constructor(actor: IUnit) {
        super(actor, 'Thief amulet', 5);
    }

    beforeResolve(combat?: ICombat, self?: IUnit, target?: IUnit) {
        super.beforeResolve(combat, self, target);
        self.character.effects = self.character.effects.filter(effect =>
            !removeTypes.some(type => effect.type[type])
        );
    }
}